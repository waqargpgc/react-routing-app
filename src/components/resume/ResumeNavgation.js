import logo from './../../logo.svg';
import { Outlet, Link, NavLink } from "react-router-dom";
const ResumeNavgation = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">
          {/* <NavLink className="navbar-brand" href="index.html">
            <span className="fw-bolder text-primary"> <img src={logo} className="App-logo" alt="logo" /></span>
          </NavLink>
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
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <NavLink className="nav-link" to="experience">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="education">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="languages">
                  Languages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      </>
     );
}

export default ResumeNavgation;