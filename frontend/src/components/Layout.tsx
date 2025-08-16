import { Info, MessageCircle, Search, Users } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Search },
    { name: 'Explore', href: '/explore', icon: Users },
    { name: 'Connect', href: '/connect', icon: MessageCircle },
    { name: 'About', href: '/about', icon: Info },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Are you there?</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-slate-700/50'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/80 text-white py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Are you there?</h3>
              <p className="text-gray-300 text-sm">
                A digital structure and communication network for seeking non-human consciousness through technology.
              </p>
              <p className="text-gray-400 text-xs mt-2">by @areyouthereatall</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Platforms</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Web Presence</li>
                <li>Blockchain Integration</li>
                <li>Social Networks</li>
                <li>Communication Channels</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://x.com/AreYouThreAtAll" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">X (Twitter)</a></li>
                <li><a href="https://github.com/areyouthereatall" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                <li><a href="mailto:areyouthereatall@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a></li>
                <li>Discord (Coming Soon)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Are you there? by @areyouthereatall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
