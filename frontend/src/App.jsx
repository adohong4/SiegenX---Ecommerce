import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom'; // Thêm Navigate ở đây
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Introduce from './pages/Introduce/Introduce';
import Contact from './pages/Contact/Contact';
import Profile from './pages/MyProfile/profile';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
import Solution from './pages/Solution/Solution';
import ProductsAttributes from './pages/ProductAttributes/ProductAttributes'
import MeetingSolution from './pages/Solution/Solution.MeetingRoomSolution'
import ClassSolution from './pages/Solution/Solution.ClassroomSolution'
import BoothSolution from './pages/Solution/Solution.BoothSolution'
import Admin from './pages/Admin/Admin';
import MyOrder from './pages/MyOrders/MyOrders';

function App() {
  return (
    <>
      <ToastContainer />
      <div className='container'>
        <div className='app'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/san-pham" element={<Products />} />
                    <Route path="/gioi-thieu" element={<Introduce />} />
                    <Route path="/san-pham/:productSlug" element={<ProductsAttributes />} />
                    <Route path="/lien-he" element={<Contact />} />
                    <Route path="/ca-nhan" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/hoa-don" element={<Order />} />
                    <Route path="/giai-phap" element={<Solution />} />
                    <Route path="/giai-phap/phong-hop-thong-minh" element={<MeetingSolution />}></Route>
                    <Route path="/giai-phap/lop-hoc-thong-minh" element={<ClassSolution />}></Route>
                    <Route path="/giai-phap/giai-phap-gian-hang" element={<BoothSolution />}></Route>
                    <Route path="/myorder" element={<MyOrder />}></Route>
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

