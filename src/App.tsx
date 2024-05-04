import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Vault from './pages/Vault';
import NavBar from './components/Navbar';
import 'flowbite';


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/vault" element={<Vault />} />
       </Routes>
    </>
  )
}

export default App
