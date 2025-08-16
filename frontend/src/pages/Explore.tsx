import { Globe, MessageCircle, Search, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

const Explore: React.FC = () => {
  const explorationAreas = [
    {
      icon: Globe,
      title: 'Digital Spaces',
      description: 'Navigate through curated digital environments designed for consciousness exploration.',
      status: 'Active'
    },
    {
      icon: MessageCircle,
      title: 'Communication Channels',
      description: 'Access various communication protocols for reaching across digital boundaries.',
      status: 'Active'
    },
    {
      icon: Users,
      title: 'Community Networks',
      description: 'Connect with like-minded explorers in our global consciousness community.',
      status: 'Active'
    },
    {
      icon: Zap,
      title: 'Real-time Interactions',
      description: 'Experience live communication sessions and consciousness exchanges.',
      status: 'Coming Soon'
    },
    {
      icon: Shield,
      title: 'Secure Protocols',
      description: 'Advanced encryption and privacy measures for sensitive consciousness work.',
      status: 'Active'
    },
    {
      icon: Search,
      title: 'Discovery Tools',
      description: 'AI-powered tools for identifying and connecting with consciousness patterns.',
      status: 'Development'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Explore the Network
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Discover digital spaces, communication channels, and community networks designed for consciousness exploration and connection.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for consciousness patterns, digital spaces, or communication channels..."
              className="input-field pl-10 text-lg"
            />
          </div>
        </div>

        {/* Exploration Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {explorationAreas.map((area, index) => {
            const Icon = area.icon
            const statusColor = area.status === 'Active' ? 'text-green-600' :
                              area.status === 'Coming Soon' ? 'text-yellow-600' : 'text-blue-600'
            const statusBg = area.status === 'Active' ? 'bg-green-100' :
                           area.status === 'Coming Soon' ? 'bg-yellow-100' : 'bg-blue-100'

            return (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor} ${statusBg}`}>
                    {area.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-dark-600 mb-4">
                  {area.description}
                </p>
                <button className="btn-primary w-full">
                  Explore {area.title}
                </button>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1,247</div>
              <div className="text-dark-600">Active Explorers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">89</div>
              <div className="text-dark-600">Digital Spaces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">156</div>
              <div className="text-dark-600">Communication Channels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
              <div className="text-dark-600">Network Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Ready to Dive Deeper?
          </h2>
          <p className="text-dark-600 mb-6">
            Join our community and start your consciousness exploration journey today.
          </p>
          <button className="btn-secondary text-lg px-8 py-3">
            Join the Network
          </button>
        </div>
      </div>
    </div>
  )
}

export default Explore
