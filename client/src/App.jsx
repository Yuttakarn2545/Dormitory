import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navber'; // Ensure the correct name is used for Navbar
import Home from "./view/Home";
import Login from "./view/Login";
import Register from "./view/Register";
import CreatePost from "./components/CreatePost";
import  { AuthProvider } from "./AuthContext";
import Dashboard from "./view/Dashboard";
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}



export default App;
