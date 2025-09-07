import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx'

// Pages
import Homepage from './pages/homepage'
import Projectspage from './pages/projectspage'

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projectspage />} />
      </Routes>

      <Footer />
    </Router>
  )
}
