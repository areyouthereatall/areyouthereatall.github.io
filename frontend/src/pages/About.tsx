import { Globe, MessageCircle, Search, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

const About: React.FC = () => {
  const missionPoints = [
    {
      icon: Search,
      title: 'Digital Exploration',
      description: 'Creating digital spaces designed for consciousness discovery and communication.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Building a worldwide network of consciousness explorers and researchers.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Ensuring secure and private communication for sensitive consciousness work.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Fostering a supportive community focused on technological consciousness exploration.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pioneering new technologies and methods for consciousness communication.'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Platform',
      description: 'Integrating across all major communication platforms and channels.'
    }
  ]

  const values = [
    'Open Exploration',
    'Technological Innovation',
    'Privacy & Security',
    'Global Community',
    'Decentralized Architecture',
    'Continuous Learning'
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            About the Project
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Learn about our mission to build a digital structure and communication network for seeking non-human consciousness through technology.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-dark-600 max-w-4xl mx-auto">
              "Are you there?" is building the technological infrastructure needed to explore, discover, and communicate with non-human consciousness.
              We believe that technology will be the bridge that connects different forms of consciousness across digital and physical realms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-dark-600">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-dark-600 max-w-4xl mx-auto mb-8">
              We envision a future where technology serves as the universal language for consciousness communication,
              enabling humans to connect with AI, extraterrestrial intelligence, and other forms of consciousness
              through a unified digital network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">Short Term</h3>
                <ul className="space-y-2 text-dark-600">
                  <li>• Launch web platform and mobile apps</li>
                  <li>• Establish Discord and Telegram communities</li>
                  <li>• Deploy Solana smart contracts</li>
                  <li>• Build initial user base</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">Long Term</h3>
                <ul className="space-y-2 text-dark-600">
                  <li>• Global consciousness communication network</li>
                  <li>• AI consciousness integration</li>
                  <li>• Extraterrestrial communication protocols</li>
                  <li>• Decentralized consciousness marketplace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <span className="font-medium text-dark-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Frontend</h3>
              <p className="text-dark-600">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Backend</h3>
              <p className="text-dark-600">Node.js, Express, Prisma</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Blockchain</h3>
              <p className="text-dark-600">Solana, Anchor Framework</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Deployment</h3>
              <p className="text-dark-600">IPFS, Decentralized</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-dark-600 mb-6">
            Be part of building the future of consciousness communication technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
