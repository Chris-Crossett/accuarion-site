import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ArcaERP from './pages/ArcaERP.jsx'
import ArcaTrust from './pages/ArcaTrust.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'

// BrowserRouter gives us clean URLs (e.g. /products/arcaerp).
// GitHub Pages doesn't natively support client-side routing, so we use a
// 404.html redirect trick: any path that 404s gets rewritten with the
// original path in a query string, then index.html decodes it back into
// the URL via history.replaceState before React Router reads it.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>,
)
