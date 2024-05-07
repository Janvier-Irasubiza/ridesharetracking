import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="" className="nv-link">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="" className="nv-link">
          <FontAwesomeIcon icon={faInfoCircle} />
        </Link>
        <Link to="" className="nv-link">
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
