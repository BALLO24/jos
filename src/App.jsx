import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={<Accueil/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
