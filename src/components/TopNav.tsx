import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-5 align-items-center">
          <button className="bars">
            <FontAwesomeIcon icon={faBars} className="" />
          </button>
          <div className="lnks">
            <Link to="" className="nv-link">
              Home
            </Link>
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center">
          <Link to="" className="nv-link">
            Startup
          </Link>
          <Link to="" className="sdr-btn">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
