import { Routes, Route } from "react-router-dom";

import MainLayout from "../Components/MainLayout";
import AdminDashboard from "../Pages/AdminDashboard";
import CartPage from "../Pages/CartPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Homepage from "../Pages/Homepage";

import ProductPage from "../ProductPages_manmohan/ProductPage";
import LoginCard from "../register/Login";
import SignupCard from "../register/Register";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/product/:id" element={<h2>single product page</h2>}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/login" element={<LoginCard />}></Route>
      <Route path="/register" element={<SignupCard />}></Route>

      {/* <Route path="/cart"  element={<Cart/>} ></Route> */}
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
