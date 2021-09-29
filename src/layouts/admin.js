import React from "react";
import { NavLink } from "react-router-dom";

const LayoutAdmin = props => {
  return (
    <div className="row">
      <div className="col-3">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ height: "700px"}}
        >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Sidebar</span>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
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
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#speedometer2" />
                </svg>
                <NavLink activeClassName="active" className="nav-link px-2 text-secondary" to="/admin/dashboard">
                  Dashboard
                </NavLink>
            </li>
            <li>
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                <NavLink activeClassName="active" className="nav-link px-2 text-secondary" to="/admin/user">
                  User
                </NavLink>
            </li>
            <li>
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#grid" />
                </svg>
                <NavLink activeClassName="active" className="nav-link px-2 text-secondary" to="/admin/product">
                  Product
                </NavLink>
            </li>
            <li>
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                <NavLink activeClassName="active" className="nav-link px-2 text-secondary" to="/admin/category">
                  Category
                </NavLink>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div className="col-9">{props.children}</div>
    </div>
  );
};

export default LayoutAdmin;
