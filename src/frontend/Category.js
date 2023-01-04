import "./Category.css";
import { Link } from 'react-router-dom';


function Category({ allcat }) {
  //console.log(allcat)
  return (
    <div className="category">
      <div className="categorypage">
        <ul className="dropmainnaveul">
          {allcat?.map((c) => (
            <li className="topcartli">
              <Link to={`/allcat/${c._id}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category