import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ArcaERP from './pages/ArcaERP.jsx'
import ArcaTrust from './pages/ArcaTrust.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'

// HashRouter keeps routing working on GitHub Pages without server config.
// URLs will look like: accuarion.com/#/about
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/arcaerp" element={<ArcaERP />} />
          <Route path="products/arcatrust" element={<ArcaTrust />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
