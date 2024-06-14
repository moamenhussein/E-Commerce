import React, { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../rtk/bank-slice";
import { Link } from "react-router-dom";
import { addProduct } from "../../rtk/cart-slice";
const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bank);
  const stateCart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="moamen">
      <h1 className="headingboxproduct">Exclusive Products</h1>
      <div className="container text-center productsContainer">
        <div className="row">
          {state.map((product) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 productbox"
              key={product.id}
            >
              <img src={product.image} alt="" />
              <h5>{product.title.slice(0, 30)}...</h5>
              <h6 className="category">{product.category}</h6>
              <div className="info">
                <h6>{product.price.toFixed(2)}$</h6>
                <button onClick={() => dispatch(addProduct(product))}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
              <Link to={`/product/${product.id}`}>
                <span>Read More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
