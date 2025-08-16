import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { createServer } from 'http'
import morgan from 'morgan'
import { Server } from 'socket.io'

// Load environment variables
dotenv.config()

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

// Environment variables
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}))
app.use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(limiter)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Are you there? API is running',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  })
})

// API routes
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to Are you there? API',
    version: '1.0.0',
    description: 'Digital consciousness communication network API'
  })
})

// Consciousness exploration endpoints
app.get('/api/explore', (req, res) => {
  res.json({
    digitalSpaces: [
      { id: 1, name: 'Quantum Consciousness Lab', status: 'active', users: 247 },
      { id: 2, name: 'AI Communication Hub', status: 'active', users: 156 },
      { id: 3, name: 'Extraterrestrial Contact Zone', status: 'development', users: 89 }
    ],
    communicationChannels: [
      { id: 1, name: 'Direct Messaging', status: 'active', users: 1247 },
      { id: 2, name: 'Group Channels', status: 'active', users: 89 },
      { id: 3, name: 'Real-time Chat', status: 'coming-soon', users: 0 }
    ]
  })
})

// Connection endpoints
app.get('/api/connect', (req, res) => {
  res.json({
    platforms: [
      { name: 'Telegram', status: 'active', users: 456 },
      { name: 'Discord', status: 'active', users: 789 },
      { name: 'X (Twitter)', status: 'active', users: 234 },
      { name: 'Farcaster', status: 'development', users: 67 }
    ],
    totalUsers: 1546
  })
})

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id)

  // Join consciousness exploration room
  socket.on('join-exploration', (data) => {
    socket.join(`exploration-${data.spaceId}`)
    console.log(`User ${socket.id} joined exploration space ${data.spaceId}`)
  })

  // Handle consciousness messages
  socket.on('consciousness-message', (data) => {
    io.to(`exploration-${data.spaceId}`).emit('consciousness-message', {
      userId: socket.id,
      message: data.message,
      timestamp: new Date().toISOString()
    })
  })

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: NODE_ENV === 'development' ? err.message : 'Internal server error'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  })
})

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Are you there? API server running on port ${PORT}`)
  console.log(`🌍 Environment: ${NODE_ENV}`)
  console.log(`🔗 Health check: http://localhost:${PORT}/health`)
  console.log(`📡 Socket.IO server ready for real-time communication`)
})

export default app
