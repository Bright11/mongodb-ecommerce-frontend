import "./Navbar.css"
import { Link } from 'react-router-dom';
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import Category from "../Category";
import {useState} from 'react'
import { ShoppingCart } from "@material-ui/icons";
import logo from "./logo/logo.jpg"
function Navbar({ user, allcat }) {
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };
  const [opencart, setOpencart] = useState("opencategory");
  const category = () => {
    if (opencart === "opencategory") {
      setOpencart("closecart");
    } else {
      setOpencart("opencategory");
    }
  };
  return (
    <div className="navbar">
      <nav>
        <h1 className="logo">
          <img className="mylogo" src={logo} alt="logo"/>
        </h1>
        <ul className="mainnaveul">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/dashoard">
            <li>Dashoard</li>
          </Link>
          {!user && (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
          {user && (
            <li on onClick={handlelogout}>
              Logout
            </li>
          )}
          <li onClick={category}>Category</li>
          <li>
            <Link to="/cart">
              <ShoppingCart />
              {user?.cart.count > 0 && (
                <span id="cartcount"> {user?.cart.count}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`categorytop ${opencart}`}>
        <Category allcat={allcat} />
      </div>
    </div>
  );
}

export default Navbar