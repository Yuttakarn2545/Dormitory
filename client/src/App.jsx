import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navber'; // Ensure the correct name is used for Navbar
import Home from "./view/Home";
import Login from "./view/Login";
import Register from "./view/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
