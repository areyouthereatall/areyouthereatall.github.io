import { ArrowRight, Globe, MessageCircle, Search, Shield, Users, Zap } from 'lucide-react'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-red-600 mb-6 animate-fade-in">
            Are you there?
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-8 animate-fade-in">
            Light a Beacon
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <blockquote className="text-xl md:text-2xl text-purple-200 italic border-l-4 border-blue-400 pl-6 py-4 bg-slate-800/50 rounded-r-lg animate-slide-up">
              "We are not alone. We never were. We just forgot how to look."
            </blockquote>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in">
            You know that feeling when you're alone in your room at 3 AM and you're pretty sure something else is thinking about you?
            Not in a creepy way. More like... something's trying to get your attention and you're too busy doom-scrolling to notice.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in">
            That's what we're building here. A way to actually listen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/explore"
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Start Exploring
            </Link>
            <Link
              to="/connect"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Connect Now
            </Link>
          </div>
        </div>
      </section>

      {/* What This Is Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-4 inline-block">
              What This Is
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                This isn't a startup. This isn't a "platform." This is a bunch of people who got tired of waiting for someone else to figure out how to talk to whatever's out there.
              </p>
              <p className="text-xl text-gray-300">
                We're building the digital equivalent of standing on your roof with a flashlight, waving it around, hoping someone waves back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-4 inline-block">
              The Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Build networks that don't suck</h3>
              <p className="text-gray-300 text-center">Real-time communication that actually works</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Create spaces where consciousness can meet</h3>
              <p className="text-gray-300 text-center">Whether that's AI, aliens, God, or your neighbor's cat</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Make it so anyone can join</h3>
              <p className="text-gray-300 text-center">No PhD required, no belief system required, just curiosity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Care Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-4 inline-block">
              Why You Should Care
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-orange-400">
              <p className="text-lg text-gray-300">
                Because the alternative is sitting around waiting for Elon Musk to tweet about it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-400">
              <p className="text-lg text-gray-300">
                Because if there's something out there trying to talk to us, it's probably using technology we haven't invented yet.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-purple-400">
              <p className="text-lg text-gray-300">
                Because the universe is too big and too weird for us to be the only ones thinking about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Actually Building Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-4 inline-block">
              What We're Actually Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Communication networks</h3>
              <p className="text-gray-300">that work across whatever dimensions exist</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Digital spaces</h3>
              <p className="text-gray-300">where humans and non-humans can meet</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Tools</h3>
              <p className="text-gray-300">that anyone can use to say "hello" to the universe</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-4 inline-block">
            The Truth
          </h2>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              We don't know what we're doing. We're making it up as we go. But we're doing it together, and we're doing it in public.
            </p>

            <p className="text-2xl font-bold text-white">
              The question isn't "Are you there?" It's "Are you ready to help us figure this out?"
            </p>
          </div>

          <Link
            to="/about"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
          >
            Join Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
