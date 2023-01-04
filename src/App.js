import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './admin/adminpages/Dashboard'
import Home from './frontend/Home';
import { useState, useEffect } from "react";
import Navbar from './frontend/navebar/Navbar';
import Adminnavbar from './admin/adminpages/Adminnavbar';
import Addproduct from './admin/adminpages/Addproduct';
import AddCategory from './admin/adminpages/AddCategory';
import Login from './frontend/Login';
import Register from './frontend/Register';
import { useSelector } from 'react-redux';
import ProductDetailspage from "./frontend/ProductDetailspage";
import axios from './axios';
import Alcategory from './frontend/Alcategory';
import ScrollTotop from './frontend/ScrollTotop';
import Cartpage from './frontend/Cartpage';
import Orderspage from "./frontend/Orderspage";
import Allusers from './admin/adminpages/Allusers';
import Allcategory from './admin/adminpages/Allcategory';
import Allproduct from './admin/adminpages/Allproduct';

function App() {
  const [shownav, setShownav] = useState(false);
  const [adminnav, setadminnav] = useState(false);
  const user = useSelector((state) => state.user);
  const [allcat, setAllcat] = useState([]);
  //getting categories
  useEffect(() => {
    axios.get("/category").then((getcat) => {
      setAllcat(getcat.data);
    });
  }, [allcat]);
  //the end
  return (
    <div className="App">
      <BrowserRouter>
        {shownav && <Navbar user={user} allcat={allcat} />}
        {adminnav && <Adminnavbar user={user} />}
        <ScrollTotop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShownav={setShownav}
                adminnav={setadminnav}
                user={user}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orderspage
                setShownav={setShownav}
                adminnav={setadminnav}
                user={user}
              />
            }
          />
          <Route
            path="/allcat/:producslug"
            element={<Alcategory setShownav={setShownav} user={user} />}
          />
          {user && (
            <>
              <Route
                path="/cart"
                element={<Cartpage setShownav={setShownav} />}
              />
            </>
          )}
          <Route
            path="/details/:id"
            element={<ProductDetailspage setShownav={setShownav} user={user} />}
          />
          <Route
            path="/addcart"
            element={
              <AddCategory shownav={setShownav} adminnav={setadminnav} />
            }
          />
          <Route
            path="/seecat"
            element={
              <Allcategory shownav={setShownav} adminnav={setadminnav} />
            }
          />
          <Route
            path="/users"
            element={<Allusers shownav={setShownav} adminnav={setadminnav} />}
          />
          <Route
            path="/seepro"
            element={<Allproduct shownav={setShownav} adminnav={setadminnav} />}
          />
          <Route
            path="/dashoard"
            element={<Dashboard shownav={setShownav} adminnav={setadminnav} />}
          />
          <Route
            path="/addpro"
            element={<Addproduct adminnav={setadminnav} />}
          />
          <Route
            path="/login"
            element={<Login shownav={setShownav} adminnav={setadminnav} />}
          />

          <Route
            path="/register"
            element={<Register shownav={setShownav} adminnav={setadminnav} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
