
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Adminanel from "./components/Adminanel";
import Mainui from "./components/Mainui.jsx";
import Enquiry from "./pages/Enquiry";
import Forgetpassword from "./pages/Forgetpassword";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/forgetpassword" element={<Forgetpassword />}/>
              <Route path="/admin" element={<Mainui />}>
                <Route indexelement={<Adminanel/>} />
                <Route path="enquiry" element={<Enquiry/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
