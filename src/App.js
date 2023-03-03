
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Mainui from "./components/Mainui.jsx";
import Forgetpassword from "./pages/Forgetpassword";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
              <Route path="/admin" element={<Mainui />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
