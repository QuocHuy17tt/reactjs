import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signOut, isAuthenticated } from "../auth"; // co vao duoc ham kia veo dau
import { useLocation } from "react-router-dom";
const Header = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  // console.log(isAuthenticated())
  const { user } = isAuthenticated();
  // console.log(user)
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  className="nav-link px-2 text-secondary"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  HomePage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="nav-link px-2 text-secondary"
                  activeClassName="active"
                >
                  About Page
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="nav-link px-2 text-secondary" to="">
                  Product Page
                </NavLink>
              </li>
              
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              {pathname !== "/signin" && isLogged ? (
                <>
                  <li>
                    <NavLink
                      className="nav-link px-2 text-secondary"
                      to={
                        user.role == 1 ? "/admin/dashboard" : "/user/dashboard"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <button type="button" className="btn btn-outline-light me-2">
                    <a
                      activeClassName="active"
                      className="nav-link px-2 text-secondary"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        signOut(() => {
                          setIsLogged(false);
                          history.push("/");
                        })
                      }
                    >
                      Signout
                    </a>
                  </button>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-outline-light me-2">
                    <NavLink
                      activeClassName="active"
                      className="nav-link px-2 text-secondary"
                      to="/signin"
                    >
                      Signin
                    </NavLink>
                  </button>
                  <button type="button" className="btn btn-warning">
                    <NavLink
                      activeClassName="active"
                      className="nav-link px-2 text-secondary"
                      to="/signup"
                    >
                      Signup
                    </NavLink>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
