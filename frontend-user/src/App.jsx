import { Route, Routes, Navigate } from 'react-router-dom'; // Thêm Navigate ở đây
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Introduce from './pages/Introduce/Introduce';
import Contact from './pages/Contact/Contact';
import Profile from './pages/MyProfile/profile';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <div className='container'>
        <div className='app'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/about" element={<Introduce />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
            {/* Redirect từ path khác về Home */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
