
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Connect from './pages/Connect'
import Explore from './pages/Explore'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
