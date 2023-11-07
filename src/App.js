import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from './components/Navbar/navbar'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import welcome from "./components/Welcome/welcome";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <welcome/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

