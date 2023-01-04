import "./Allusers.css";
import Adinsidbar from './Adinsidbar';
import { Delete } from "@material-ui/icons";
import axios from "../../axios"
import { useState, useEffect } from "react";
import Loader from "../../frontend/Loader";
function Allusers() {
    const [users, setUsers] = useState([]);
     const [nousers, setNusers] = useState(false);
    
    useEffect(() => {
        axios.get("/admin/allusers").then((alluser) => {
          setNusers(true)
        setUsers(alluser.data);
      });
    }, [users]);
    //console.log(users)
    if (nousers === false) {
        return <Loader />;
    }
    return (
      <div className="dashboard allusers">
        <div className="sidebar">
          <Adinsidbar />
        </div>
        <div className="maincontentadmin mytable">
          <table role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th role="columnheader">Name</th>
                <th role="columnheader">Email</th>
                <th role="columnheader">Action</th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {users?.map((u) => (
                <tr role="row">
                  <td role="cell">{u.name}</td>
                  <td role="cell">{u.email}</td>

                  <td role="cell">
                    <Delete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Allusers