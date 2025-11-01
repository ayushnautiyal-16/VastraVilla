import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/seller' element={<AdminPanel />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
