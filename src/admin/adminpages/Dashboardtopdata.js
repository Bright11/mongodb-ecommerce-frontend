import { DataUsageSharp, Nature } from "@material-ui/icons";
import "./Dashboardtopdata.css";

function Dashboardtopdata({ countproduct, numberuser, countcart }) {
  return (
    <div className="dashboardtopdata">
      <div className="dtopgrid">
        <div className="adminiconholder">
          <DataUsageSharp className="adminicon" />
          <p className="adminitemname">Products</p>
          <Nature className="adminicon" />
        </div>

        <h1 className="itemnumber">{countproduct}</h1>
      </div>
      <div className="dtopgrid">
        <div className="adminiconholder">
          <DataUsageSharp className="adminicon" />
          <p className="adminitemname">Users</p>
          <Nature className="adminicon" />
        </div>
        <h1 className="itemnumber">{numberuser}</h1>
      </div>
      <div className="dtopgrid">
        <div className="adminiconholder">
          <DataUsageSharp className="adminicon" />
          <p className="adminitemname">Categories</p>
          <Nature className="adminicon" />
        </div>
        <h1 className="itemnumber">{countcart}</h1>
      </div>
     
    </div>
  );
}

export default Dashboardtopdata