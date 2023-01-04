import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../services/appApi";

function Register({ shownav, adminnav }) {
  adminnav(false);
  shownav(true);
    const [register, { error, isLoading, isError }] = useRegisterMutation();
  const [seepass, setSeepass] = useState("password");
  const [seepasswordtext, setSeepasswordtext] = useState("Show password");
const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [confirmp, setConfirmp] = useState('');
    const [pnotmatch, setPnotmatch] = useState("");
  
  const seepassword = () => {
    if (seepass === "password") {
      setSeepass("text");
      setSeepasswordtext("Hid password");
    } else {
      setSeepass("password");
      setSeepasswordtext("Show Password");
    }
  };

  const handleregister = (e) => {
    e.preventDefault()
    if(name==="" || email===""||password===""|| confirmp==="")
    {
        setPnotmatch("Forms cannot be empty");

    } else {
      if (password === confirmp) {
        register({ name, email, password });
        // setPnotmatch("Success");

      } else {
        setPnotmatch("Password did not match now");
      }
    }
  }

  return (
    <div className="login">
      <div className="logincontent">
        <form>
          {/* <p className="showpassword">{pnotmatch}</p> */}
          {isError && <p className="showpassword">{error.data}</p>}
          <label>User Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type={seepass}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type={seepass}
            placeholder="Confirm Password"
            value={confirmp}
            onChange={(e) => setConfirmp(e.target.value)}
          />
          <p className="showpassword" onClick={seepassword}>
            {seepasswordtext}
          </p>
          <button type="submit" disabled={isLoading} onClick={handleregister}>
            Login
          </button>
          <p>
            Have account <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
