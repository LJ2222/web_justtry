import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cases from './pages/Cases'
import Tools from './pages/Tools'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('cases')

  const renderPage = () => {
    switch (currentPage) {
      case 'cases':
        return <Cases />
      case 'tools':
        return <Tools />
      case 'about':
        return <About />
      default:
        return <Cases />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 我的作品集. 保留所有权利。</p>
      </footer>
    </div>
  )
}

export default App
