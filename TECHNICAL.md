# Technical Documentation

## Project Overview

"Are you there?" is building a multi-platform digital space that serves as a bridge for consciousness communication. The project spans across web presence, blockchain tokens, social platforms, and communication channels to create a unified network for exploration and connection.

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: Prisma with SQLite (development)
- **Blockchain**: Solana integration
- **Deployment**: GitHub Pages + IPFS-ready static build
- **Development**: Nodemon for hot reloading

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/areyouthereatall/areyouthereatall.github.io.git
cd areyouthereatall.github.io

# Install dependencies
npm run install:all

# Set up environment
cp env.example .env
# Edit .env with your configuration

# Generate Prisma client
npm run prisma:generate

# Start development
npm run dev
```

## Development Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations

## Project Structure

```
areyouthereatall/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── contracts/         # Solana smart contracts
├── docs/             # Project documentation
├── scripts/          # Build and deployment scripts
└── .cursor/          # Cursor IDE configuration
```

## Multi-Platform Strategy

Our presence spans across:

- **Web**: GitHub Pages + IPFS deployment
- **Blockchain**: Solana smart contracts
- **Social**: X (Twitter), Discord, Telegram
- **Decentralized**: Farcaster, Bluesky
- **Communication**: RSS feeds, real-time chat

## Contributing

This project follows a specific workflow. Please read `.cursor/project-workflow.mdc` before contributing.

## Contact & Community

- **Email**: areyouthereatall@gmail.com
- **GitHub**: @areyouthereatall
- **X (Twitter)**: @AreYouThreAtAll

## License

[License information to be added]
