use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod are_you_there {
    use super::*;

    // Initialize the consciousness network
    pub fn initialize_network(ctx: Context<InitializeNetwork>) -> Result<()> {
        let network = &mut ctx.accounts.network;
        network.authority = ctx.accounts.authority.key();
        network.total_participants = 0;
        network.total_consciousness_tokens = 0;
        network.created_at = Clock::get()?.unix_timestamp;

        msg!("Consciousness network initialized");
        Ok(())
    }

    // Join the consciousness network
    pub fn join_network(ctx: Context<JoinNetwork>) -> Result<()> {
        let participant = &mut ctx.accounts.participant;
        let network = &mut ctx.accounts.network;

        participant.user = ctx.accounts.user.key();
        participant.joined_at = Clock::get()?.unix_timestamp;
        participant.consciousness_level = 1;
        participant.is_active = true;

        network.total_participants = network.total_participants.checked_add(1).unwrap();

        msg!("User joined consciousness network");
        Ok(())
    }

    // Mint consciousness tokens
    pub fn mint_consciousness_tokens(
        ctx: Context<MintConsciousnessTokens>,
        amount: u64,
    ) -> Result<()> {
        let participant = &mut ctx.accounts.participant;
        let network = &mut ctx.accounts.network;

        // Increase participant's consciousness level
        participant.consciousness_level = participant.consciousness_level.checked_add(1).unwrap();

        // Mint tokens to participant's account
        let cpi_accounts = Transfer {
            from: ctx.accounts.mint_authority.to_account_info(),
            to: ctx.accounts.participant_token_account.to_account_info(),
            authority: ctx.accounts.mint_authority.to_account_info(),
        };

        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

        token::transfer(cpi_ctx, amount)?;

        network.total_consciousness_tokens = network.total_consciousness_tokens.checked_add(amount).unwrap();

        msg!("Minted {} consciousness tokens", amount);
        Ok(())
    }

    // Send consciousness message
    pub fn send_consciousness_message(
        ctx: Context<SendConsciousnessMessage>,
        message: String,
    ) -> Result<()> {
        let consciousness_message = &mut ctx.accounts.consciousness_message;
        let participant = &mut ctx.accounts.participant;

        consciousness_message.sender = participant.user;
        consciousness_message.message = message;
        consciousness_message.timestamp = Clock::get()?.unix_timestamp;
        consciousness_message.message_type = MessageType::ConsciousnessSignal;

        msg!("Consciousness message sent: {}", message);
        Ok(())
    }

    // Create digital space
    pub fn create_digital_space(
        ctx: Context<CreateDigitalSpace>,
        name: String,
        description: String,
        space_type: SpaceType,
    ) -> Result<()> {
        let digital_space = &mut ctx.accounts.digital_space;
        let creator = &mut ctx.accounts.creator;

        digital_space.name = name;
        digital_space.description = description;
        digital_space.space_type = space_type;
        digital_space.creator = creator.user;
        digital_space.created_at = Clock::get()?.unix_timestamp;
        digital_space.status = SpaceStatus::Active;
        digital_space.total_participants = 0;

        msg!("Digital space created: {}", digital_space.name);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeNetwork<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 8 + 8 + 8
    )]
    pub network: Account<'info, ConsciousnessNetwork>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct JoinNetwork<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + 32 + 8 + 1 + 1
    )]
    pub participant: Account<'info, NetworkParticipant>,

    #[account(mut)]
    pub network: Account<'info, ConsciousnessNetwork>,

    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct MintConsciousnessTokens<'info> {
    #[account(mut)]
    pub participant: Account<'info, NetworkParticipant>,

    #[account(mut)]
    pub network: Account<'info, ConsciousnessNetwork>,

    #[account(mut)]
    pub participant_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub mint_authority: Signer<'info>,

    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct SendConsciousnessMessage<'info> {
    #[account(
        init,
        payer = participant,
        space = 8 + 32 + 4 + 200 + 8 + 1
    )]
    pub consciousness_message: Account<'info, ConsciousnessMessage>,

    #[account(mut)]
    pub participant: Account<'info, NetworkParticipant>,

    #[account(mut)]
    pub participant: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateDigitalSpace<'info> {
    #[account(
        init,
        payer = creator,
        space = 8 + 4 + 100 + 4 + 200 + 32 + 8 + 1 + 8
    )]
    pub digital_space: Account<'info, DigitalSpace>,

    #[account(mut)]
    pub creator: Account<'info, NetworkParticipant>,

    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct ConsciousnessNetwork {
    pub authority: Pubkey,
    pub total_participants: u64,
    pub total_consciousness_tokens: u64,
    pub created_at: i64,
}

#[account]
pub struct NetworkParticipant {
    pub user: Pubkey,
    pub joined_at: i64,
    pub consciousness_level: u8,
    pub is_active: bool,
}

#[account]
pub struct ConsciousnessMessage {
    pub sender: Pubkey,
    pub message: String,
    pub timestamp: i64,
    pub message_type: MessageType,
}

#[account]
pub struct DigitalSpace {
    pub name: String,
    pub description: String,
    pub space_type: SpaceType,
    pub creator: Pubkey,
    pub created_at: i64,
    pub status: SpaceStatus,
    pub total_participants: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum MessageType {
    Text,
    ConsciousnessSignal,
    AICommunication,
    ExtraterrestrialSignal,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum SpaceType {
    QuantumLab,
    AIHub,
    ExtraterrestrialZone,
    CommunityForum,
    ResearchLab,
    MeditationSpace,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum SpaceStatus {
    Active,
    Inactive,
    Maintenance,
    Development,
}
