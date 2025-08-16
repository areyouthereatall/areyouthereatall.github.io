import { Globe, MessageCircle, Search, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Digital Exploration',
      description: 'Navigate through digital spaces designed for consciousness communication and discovery.'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Platform Connection',
      description: 'Connect across web, blockchain, and social platforms in a unified network.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Join a global community focused on technological consciousness exploration.'
    },
    {
      icon: Globe,
      title: 'Decentralized Architecture',
      description: 'Built on IPFS and blockchain for truly distributed and resilient infrastructure.'
    },
    {
      icon: Zap,
      title: 'Real-time Communication',
      description: 'Instant messaging and live interaction across all connected platforms.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Secure and private communication channels for sensitive consciousness exploration.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-900 mb-6">
            Are you there?
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 mb-8 max-w-3xl mx-auto">
            A digital structure and communication network for seeking non-human consciousness through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Start Exploring
            </Link>
            <Link
              to="/connect"
              className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Connect Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Digital Infrastructure for Consciousness
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Our platform provides the technological foundation for exploring and connecting with non-human consciousness through multiple channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the network and start exploring the digital frontiers of consciousness communication.
          </p>
          <Link
            to="/about"
            className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center"
          >
            Learn More
            <Users className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
