import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './custom-styles.css';
import './App.css'
import { Home, Header, Footer,
         Pharmaceuticals,        Pharmaceutical, Outlet,
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
            <Route path='/pharmaceuticals/:id' element={<Pharmaceutical/>} />
            <Route path='/outlet' element={<Outlet/>} />  
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}