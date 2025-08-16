import { Globe, MessageCircle, Search, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

const Connect: React.FC = () => {
  const connectionMethods = [
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Send private messages to other network participants.',
      status: 'Active',
      users: '1,247'
    },
    {
      icon: Users,
      title: 'Group Channels',
      description: 'Join topic-based discussion groups and communities.',
      status: 'Active',
      users: '89'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Sync',
      description: 'Seamlessly connect across web, mobile, and social platforms.',
      status: 'Active',
      users: '156'
    },
    {
      icon: Zap,
      title: 'Real-time Chat',
      description: 'Instant messaging with live typing indicators and presence.',
      status: 'Coming Soon',
      users: '0'
    },
    {
      icon: Shield,
      title: 'Secure Channels',
      description: 'End-to-end encrypted communication for sensitive discussions.',
      status: 'Active',
      users: '73'
    },
    {
      icon: Search,
      title: 'Discovery Network',
      description: 'Find and connect with consciousness explorers worldwide.',
      status: 'Active',
      users: '2,341'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Connect & Communicate
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Join the global network of consciousness explorers and communicate across multiple platforms and channels.
          </p>
        </div>

        {/* Connection Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {connectionMethods.map((method, index) => {
            const Icon = method.icon
            const statusColor = method.status === 'Active' ? 'text-green-600' : 'text-yellow-600'
            const statusBg = method.status === 'Active' ? 'bg-green-100' : 'bg-yellow-100'

            return (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor} ${statusBg}`}>
                    {method.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-dark-600 mb-4">
                  {method.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-500">
                    {method.users} users
                  </span>
                  <button className="btn-primary">
                    Connect
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Platform Integration */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-dark-900 mb-6 text-center">
            Multi-Platform Integration
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <div className="font-medium text-dark-900">Telegram</div>
              <div className="text-sm text-dark-600">Bot Integration</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="font-medium text-dark-900">Discord</div>
              <div className="text-sm text-dark-600">Server Network</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <div className="font-medium text-dark-900">X (Twitter)</div>
              <div className="text-sm text-dark-600">Social Presence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="font-medium text-dark-900">Farcaster</div>
              <div className="text-sm text-dark-600">Decentralized</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Start Connecting Today
          </h2>
          <p className="text-dark-600 mb-6">
            Choose your preferred communication method and join the consciousness network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Join Network
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
