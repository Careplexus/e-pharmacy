import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './custom-styles.css';
import './App.css'
import { Home, Header, Footer,
         Pharmaceuticals,        OutletProductPage, Outlet, Contact, About
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
            <Route path='/outlet-product/:id' element={<OutletProductPage/>} />
            <Route path='/outlet' element={<Outlet/>} /> 
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}