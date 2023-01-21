import { Routes, Route } from "react-router-dom";
import { Routes ,Route} from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import AdminDashboard from "../Pages/AdminDashboard";
import ForgotPassword from "../Pages/ForgotPassword";
import Homepage from "../Pages/Homepage";
import ResetPassword from "../Pages/ResetPassword";
import ProductPage from "../ProductPages_manmohan/ProductPage";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";

export default function AllRoutes() {



    return <Routes>
        <Route path="/product" element={<ProductPage />} ></Route>
        <Route path="/" element={<h1>Landing page</h1>} ></Route>
        <Route path="/product/:id" element={<h2>single product page</h2>}  ></Route>
        <Route path="/cart" element={<h1>cart page</h1>} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/admin" element={<h3>admin page </h3>} ></Route>


    </Routes>

}