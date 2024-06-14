import React from "react";
import "./navbar.css";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
const Navbar = () => {
  const stateCart = useSelector((state) => state.cart);
  return (
    <>
        <ScrollToTop smooth />
      <div className="navbarfixed">
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbarcont">
            <div className="container navbarcont">
              <NavLink to="/" className="navbar-brand" href="/#">
                <img src={logo} alt="Logo" className="imageLogo" />
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
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/productsSelect">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/productsSelect">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="ms-2">{stateCart.length}</span>
                    </NavLink>
                  </li>
                  <li>
                    <i className="fa-solid fa-magnifying-glass search"></i>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
