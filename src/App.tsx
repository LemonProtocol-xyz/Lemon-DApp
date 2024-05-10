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
      <NavBar/>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/vault/pool/:param" element={<Pool />} />
       </Routes>
    </>
  )
}

export default App
