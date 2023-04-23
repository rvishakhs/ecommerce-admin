
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Adminanel from "./components/Adminanel";
import Mainui from "./components/Mainui.jsx";
import Addblog from "./pages/Addblog";
import Addblogcategory from "./pages/Addblogcategory";
import Addbrands from "./pages/Addbrands";
import Addcategory from "./pages/Addcategory";
import Addproduct from "./pages/Addproduct";
import Blogcategorylist from "./pages/Blogcategorylist";
import Bloglist from "./pages/Bloglist";
import Brands from "./pages/Brands";
import Categorylist from "./pages/Categorylist";
import ColorList from "./pages/ColorList";
import Customers from "./pages/Customers";
import Enquiry from "./pages/Enquiry";
import Forgetpassword from "./pages/Forgetpassword";
import Login from "./pages/Login";
import Orderlist from "./pages/Orderlist";
import Productlist from "./pages/Productlist";
import Addcolor from "./pages/Addcolor";
import Addcoupon from "./pages/Addcoupon";
import Couponlisting from "./pages/Couponlisting";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/admin" element={<Mainui />}>
                <Route index element={<Adminanel/>} />
                <Route path="dashbard" element={<Adminanel/>} />
                <Route path="enquiry" element={<Enquiry/>}/>
                <Route path="orders" element={<Orderlist/>}/>
                <Route path="products" element={<Productlist/>}/>
                <Route path="addproducts" element={<Addproduct/>}/>
                <Route path="blogs" element={<Bloglist/>}/>
                <Route path="blogcategories" element={<Blogcategorylist/>}/>
                <Route path="blogcategories/:id" element={<Addblogcategory/>}/>
                <Route path="addblogcategories" element={<Addblogcategory/>}/>
                <Route path="category" element={<Categorylist/>}/>
                <Route path="category/:id" element={<Addcategory/>}/>
                <Route path="brands" element={<Brands/>}/>
                <Route path="brands/:id" element={<Addbrands/>}/>
                <Route path="addcoupons" element={<Addcoupon/>}/>
                <Route path="coupons" element={<Couponlisting/>}/>
                <Route path="colors" element={<ColorList/>}/>
                <Route path="colors/:id" element={<Addcolor/>}/>
                <Route path="addcolor" element={<Addcolor/>}/>
                <Route path="customers" element={<Customers/>}/>
                <Route path="addbrand" element={<Addbrands/>}/>
                <Route path="addcategory" element={<Addcategory/>}/>
                <Route path="addblogs" element={<Addblog/>}/>
                <Route path="resetpassword" element={<Forgetpassword/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
