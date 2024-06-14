import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerOne">
        <h3>Subscribe Our Newsletter</h3>
        <div className="subscribe">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footerTwo">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="columnOneFooter">
                <i className="fa-solid fa-cart-shopping"></i>
                <h6>ShopWise</h6>
              </div>
              <ul className="mt-4 listFooter">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/#">Pages</a>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="columnOneFooter">
                <h6 className="shop">Get Help</h6>
              </div>
              <ul className="mt-4 listFooter">
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <a href="/#">Shipping</a>
                </li>
                <li>
                  <Link to="/products">Returns</Link>
                </li>
                <li>
                  <a href="/#">Order Status</a>
                </li>
                <li>
                  <Link to="/contactus">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="columnOneFooter">
                <h6 className="shop">Online Shop</h6>
              </div>
              <ul className="mt-4 listFooter">
                <li>
                  <Link to="/">Watch</Link>
                </li>
                <li>
                  <a href="/#">Bag</a>
                </li>
                <li>
                  <Link to="/products">Shoes</Link>
                </li>
                <li>
                  <a href="/#">Dress</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="columnOneFooter">
                <h6 className="shop">Follow Us</h6>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/moamenhussein">
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                    <i className="fa-brands fa-linkedin-in linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                    <i className="fa-brands fa-instagram insta"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/qr/O7BJLZVEUXVYK1">
                    <i className="fa-brands fa-whatsapp whats"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
