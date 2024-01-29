// Navbar.js
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ol style={{padding:10}}>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/refer">Reference</Link></li>
      <li><Link to="/map">Map</Link></li>
      <li><Link to="/callback">Callback</Link></li>
    </ol>
  );
};

export default Navbar;
