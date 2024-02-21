import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import MessagesComponent from './components/MessagesComponent'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/messages" element={<MessagesComponent />} />
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App