import { Link } from "react-router-dom";
import "./Adinsidbar.css";

function Adinsidbar() {
  return (
    <div className="adinsider">
      <nav>
        <ul>
          <Link to="/dashoard">
            <li>Dashoard</li>
          </Link>
          <Link to="/addcart">
            <li>Add Category</li>
          </Link>
          <Link to="/seecat">
            <li>All Category</li>
          </Link>
          <Link to="/addpro">
            <li>Add Product</li>
          </Link>
        
          <Link to="/seepro">
            <li>See Product</li>
          </Link>
          <Link to="/">
            <li>Web page</li>
          </Link>
          <Link to="/users">
            <li>Users</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Adinsidbar;