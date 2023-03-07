
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Adminanel from "./components/Adminanel";
import Mainui from "./components/Mainui.jsx";
import Categorylist from "./pages/Categorylist";
import Enquiry from "./pages/Enquiry";
import Forgetpassword from "./pages/Forgetpassword";
import Login from "./pages/Login";
import Orderlist from "./pages/Orderlist";
import Productlist from "./pages/Productlist";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/forgetpassword" element={<Forgetpassword />}/>
              <Route path="/admin" element={<Mainui />}>
                <Route index element={<Adminanel/>} />
                <Route path="dashbard" element={<Adminanel/>} />
                <Route path="enquiry" element={<Enquiry/>}/>
                <Route path="orders" element={<Orderlist/>}/>
                <Route path="products" element={<Productlist/>}/>
                <Route path="category" element={<Categorylist/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
