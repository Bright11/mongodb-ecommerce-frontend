import Adinsidbar from "./Adinsidbar";
import "./Dashboard.css";
import Dashboardtopdata from './Dashboardtopdata';
import { useEffect, useState } from "react";
import axios from "./../../axios"
import Loader from "../../frontend/Loader";
export default function Dashboard({ adminnav, shownav }) {
  adminnav(true);
  shownav(false);
  const [countproduct, setCountproduct] = useState();
  const [numberuser, setNumberuser] = useState();
  const [countcart, setCountcart] = useState();
const [noitem,setNoitem] = useState(false)
  //countproduct, numberuser
  useEffect(() => {
    axios.get("/admin").then(({ data }) => {
      setNoitem(true)
      setCountproduct(data.countproduct);
      setNumberuser(data.numberuser);
      setCountcart(data.numbercategory);
      //numbercategory
    });
  }, []);
  //console.log("count", numberuser);
  if (noitem === false) {
    return <Loader/>
  }
    return (
      <div className="dashboard">
        <div className="sidebar">
          <Adinsidbar />
        </div>
        <div className="maincontentadmin">
          <Dashboardtopdata
            countproduct={countproduct}
            numberuser={numberuser}
            countcart={countcart}
          />
        </div>
      </div>
    );
}
