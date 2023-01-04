import { Link } from "react-router-dom";
import "./Adminnavbar.css";

function Adminnavbar() {
    return (
      <div className="adminnavbar">
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>Dashboard</li>
            <li>Add Category</li>
            
          </ul>
        </nav>
      </div>
    );
}

export default Adminnavbar