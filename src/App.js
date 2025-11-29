import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Home from './components/Home';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import Orders from './components/Orders';
import Rewards from './components/Rewards';
import SellerAuth from './components/SellerAuth';
import SellerDashboard from './components/SellerDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-100">
        <Navbar />
        <CategoryBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/seller' element={<AdminPanel />} />
          <Route path='/seller-auth' element={<SellerAuth />} />
          <Route path='/seller-dashboard' element={<SellerDashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/rewards' element={<Rewards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
