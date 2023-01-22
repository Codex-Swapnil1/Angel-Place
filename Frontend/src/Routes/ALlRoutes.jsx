import { Routes, Route } from "react-router-dom";

import MainLayout from "../Components/MainLayout";
import AdminDashboard from "../Pages/AdminDashboard";
import CartPage from "../Pages/CartPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Homepage from "../Pages/Homepage";

import SingleProductPage from "../Pages/SingleProductPage";

import Payment from "../Pages/Paymetn";



import ProductPage from "../ProductPages_manmohan/ProductPage";
import LoginCard from "../register/Login";
import SignupCard from "../register/Register";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/product/:id" element={<SingleProductPage/>}></Route>
      <Route path="/cart" element={<h1>cart page</h1>}></Route>
      <Route path="/login" element={<LoginCard />}></Route>
      <Route path="/register" element={<SignupCard />}></Route>
      <Route path="/payment" element={<Payment/>} ></Route>

      {/* <Route path="/cart"  element={<Cart/>} ></Route> */}
      <Route path="/admin" element={<MainLayout />}>

        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
