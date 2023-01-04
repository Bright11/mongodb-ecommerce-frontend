import "./Allproduct.css";
import Adinsidbar from "./Adinsidbar";
import { Delete } from "@material-ui/icons";
import axios from "../../axios";
import { useState, useEffect } from "react";
import Loader from "../../frontend/Loader";
function Allproduct() {
  const [allpro, setAllpro] = useState([]);
  const [noupro, setNpro] = useState(false);

  useEffect(() => {
    axios.get("/admin/adminallproduct").then((allpro) => {
      setNpro(true);
      setAllpro(allpro.data);
    });
  }, [allpro]);
  console.log(allpro);
  if (noupro === false) {
    return <Loader />;
  }
  return (
    <div className="dashboard allusers">
      <div className="sidebar">
        <Adinsidbar />
      </div>
      <div className="maincontentadmin mytable">
       
        <div className="mydata">
          {allpro?.map((p) => (
            <div className="getdata">
              <div className="adminitemname">
                <h1>{p.name}</h1>
                <h1>${p.price}</h1>
              </div>
              <div className="adminimg">
                <img
                  className="adminproimg"
                  src={p.pictures[0].url}
                  alt={p.name}
                />
              </div>
              <div className="admindelete">
                <Delete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allproduct;
