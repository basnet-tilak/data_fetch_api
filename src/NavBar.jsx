import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div id="topnav">
      <nav>
        <ul id="nav-ul">
        <li>
            <Link to="/species">Home</Link>
          </li>
          <li>
            <Link to="/species/asia">Asia</Link>
          </li>
          <li>
            <Link to="/species/europe">Europe</Link>
          </li>
          <li>
            <Link to="/species/africa">Africa</Link>
          </li>
          <li>
            <Link to="/species/north-american">North America</Link>
          </li>
          <li>
            <Link to="/species/south-american">South America</Link>
          </li>
          <li>
            <Link to="/species/austrlia">Australia</Link>
          </li>
          <li />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
