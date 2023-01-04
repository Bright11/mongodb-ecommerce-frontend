import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
  return (
    <div className="loading">
      <ClipLoader color={"black"} size={"100"} />
    </div>
  );
}

export default Loader;
