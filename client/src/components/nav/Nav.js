import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav ms-auto justify-content-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/admin"
                >
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/addvideo"
                >
                  Add Video
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
