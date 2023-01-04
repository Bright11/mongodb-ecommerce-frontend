import "./Login.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation } from "../services/appApi";

function Login({ shownav, adminnav }) {
    adminnav(false)
    shownav(true)
    const [seepass, setSeepass] = useState("password");
    const [seepasswordtext, setSeepasswordtext] = useState("Show password");
    const [login, { error, isLoading, isError }] = useLoginMutation();
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const[caheckinfo,setCheckinfo] = useState("")
    const seepassword = () => {
        if (seepass === 'password') {
            setSeepass("text");
             setSeepasswordtext('Hid password')
        } else {
            setSeepass("password");
             setSeepasswordtext('Show Password')
       }
  }
  const handlelogin = (e) => {
    e.preventDefault();
    try {
      login({ email, password });
    } catch (e) {
      console.log(e.message)
      setCheckinfo(e.message);
    }
  }
    return (
      <div className="login">
        <div className="logincontent">
          <form>
            <p>{caheckinfo}</p>
            {isError && <p className="showpassword">{error.data}</p>}
            <label>Email </label>
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

            <p className="showpassword" onClick={seepassword}>
              {seepasswordtext}
            </p>
            <button type="submit" disabled={isLoading} onClick={handlelogin}>
              Login
            </button>
            <p>
              Don't have account <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Login