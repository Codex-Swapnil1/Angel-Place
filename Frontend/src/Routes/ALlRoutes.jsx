import { Routes ,Route} from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import AdminDashboard from "../Pages/AdminDashboard";
import CartPage from "../Pages/CartPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ResetPassword";
import ProductPage from "../ProductPages_manmohan/ProductPage";


export default function AllRoutes(){


    return (
      <Routes>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/product/:id"
          element={<h2>single product page</h2>}
        ></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<h3>Signup page</h3>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<AdminDashboard/>}/>
        </Route>
      </Routes>
    );
}