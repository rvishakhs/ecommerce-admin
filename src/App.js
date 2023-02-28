
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Mainui from "./components/Mainui.jsx";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/admin" element={<Mainui />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
