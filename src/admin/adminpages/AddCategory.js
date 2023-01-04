import "./AddCategory.css";
import Adinsidbar from './Adinsidbar';
import { useState } from 'react';
import { useCategoryMutation } from "../../services/appApi";
import { useNavigate } from 'react-router-dom';
//category
function AddCategory({ adminnav }) {
  adminnav(true);
  const [name, setName] = useState("");
const navigate = useNavigate();
  const [category, { error, isLoading, isError }] = useCategoryMutation();
  const checkslug = name;

  // Replacing " " (space) to "" empty space
  const slug = checkslug.replace(/ /, "");
  console.log(slug); // BJ721JL
  const handlesubmit = (e) => {
    e.preventDefault();
    category({ name, slug });
          navigate("/seecat");

  };
  return (
    <div className="addCategory">
      <Adinsidbar />
      <div className="categoryform">
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         
          <button type="submit" onClick={handlesubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory