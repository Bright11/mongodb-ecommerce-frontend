import "./Allcategory.css";
import Adinsidbar from "./Adinsidbar";
import { Delete } from "@material-ui/icons";
import axios from "../../axios";
import { useState, useEffect } from "react";
import Loader from "../../frontend/Loader";
function Allcategory() {
  const [allcat, setAllcat] = useState([]);
  const [ncat, setNcat] = useState(false);
  useEffect(() => {
    axios.get("/admin/getallcat").then((allcategory) => {
      setNcat(true);
      setAllcat(allcategory.data);
    });
  }, [allcat]);
  //console.log(users)
  if (ncat === false) {
    return <Loader />;
  }
  return (
    <div className="dashboard allcategory">
      <div className="sidebar">
        <Adinsidbar />
      </div>
      <div className="maincontentadmin mainallcat ">
        <div className="mytablecat">
          {allcat?.map((u) => (
            <div className="mycategory">
              <h1 className="deleteadmin1">{u.name}</h1>
              <div className="deleteadmin">
                <Delete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allcategory;
