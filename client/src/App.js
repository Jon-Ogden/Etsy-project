import "./App.css"
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserAccount from './components/shared/UserAccount';
import FetchUser from './components/auth/FetchUser';
import Sellers from "./components/shared/Sellers";
import Buyers from "./components/shared/Buyers";
import Products from "./components/shared/Products";
import EditSeller from "./components/shared/EditSeller";
import SellerProducts from "./components/shared/SellerProducts";
import EditProduct from "./components/shared/EditProduct";

const App = () => (
  <>
    <Navbar />
    <>
    {/* <FetchUser> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/editSeller/:id" element={<EditSeller />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/sellerProducts/:id" element={<SellerProducts />} />
        <Route  element={<ProtectedRoute/>}>
            <Route path="/account" element={<UserAccount />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    {/* </FetchUser> */}
    </>
  </>
)

export default App;