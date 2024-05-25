import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Vault from './pages/Vault';
import NavBar from './components/Navbar';
import Pool from './pages/Pool';
import 'flowbite';


function App() {

  return (
    <>
      <div className="bg-white dark:bg-[#2A2A2A] text-black dark:text-white bg-[url('/src/assets/hero.png')] dark:bg-[url('/src/assets/hero-mobile.png')] md:bg-[url('/src/assets/hero.png')] md:dark:bg-[url('/src/assets/hero.png')] bg-cover bg-bottom md:bg-center min-h-full bg-fixed overflow-y-auto w-full font-Manrope">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/vault/pool/:param" element={<Pool />} />
        </Routes>
      </div>
    </>
  )
}

export default App
