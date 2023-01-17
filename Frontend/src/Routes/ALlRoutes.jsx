import { Routes ,Route} from "react-router-dom";
import ProductPage from "../ProductPages_manmohan/ProductPage";


export default function AllRoutes(){


    return <Routes>
<Route path="/product" element={<ProductPage/>} ></Route>
<Route path="/" element={<h1>Landing page</h1>} ></Route>
<Route path="/product/:id" element={<h2>single product page</h2>}  ></Route>
<Route path="/cart" element={<h1>cart page</h1>} ></Route>
<Route path="/login" element={<h3>login page</h3>} ></Route>
<Route path="/register" element={<h3>Signup page</h3>} ></Route>
<Route path="/admin" element={<h3>admin page </h3>} ></Route>


    </Routes>
}