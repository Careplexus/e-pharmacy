import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home, Header, Footer,
         Pharmaceuticals,        Pharmaceutical,
       } from './pages/Index'

export default function App() {
  return (
    <Router>
      <div className='app-container'>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pharmaceuticals' element={<Pharmaceuticals/>} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}