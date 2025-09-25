/**
 * File: src/App.jsx
 * Role: Root app + routing (flat: Navbar, Routes, Footer)
 */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'

// Pages
import Homepage from './pages/homepage'
import Projectspage from './pages/projectspage'
import Testpage from './pages/testpage.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/test" element={<Testpage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}
