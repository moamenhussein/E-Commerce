import React, { useEffect, useState } from "react";
import "./productinfo.css";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div className="productpage">
      <div className="container containerInformation">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="image">
              <img src={products.image} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="infoBox">
              <div className="star">
                <i className="fa-solid fa-star stars"></i>
                <i className="fa-solid fa-star stars"></i>
                <i className="fa-solid fa-star stars"></i>
                <i className="fa-solid fa-star stars"></i>
                <i className="fa-solid fa-star stars"></i>
              </div>
              <p className="title">{products.title}</p>
              <h5 className="price">Price: {products.price}$</h5>
              <h6 className="headingDiscription">Description</h6>
              <p className="description">{products.description}</p>
              <div className="dayAndYear">
                <div className="year flexDiv">
                  <i className="fa-solid fa-calendar-days"></i>
                  <p>1 Year AL Jazeera Brand Warranty</p>
                </div>
                <div className="day flexDiv">
                  <i className="fa-solid fa-database"></i>
                  <p>30 Day Return Policy</p>
                </div>
                <div className="cash flexDiv">
                  <i className="fa-solid fa-money-bill"></i>
                  <p>Cash on Delivery available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
