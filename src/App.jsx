import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Aurora from './components/Aurora.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Aurora />
      <Nav />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
