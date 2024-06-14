import React from "react";
import "./products-select.css";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts, deleteProduct } from "../../rtk/cart-slice";
const ProductsSelect = () => {
  const stateCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = stateCart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);
  return (
    <div className="productsSelects">
      <h2>Your Cart</h2>
      <h5>Total Cost: {totalPrice.toFixed(2)} $</h5>
      <button className="clear" onClick={() => dispatch(clearProducts())}>
        Clear Cart
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stateCart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.image} alt="" className="selectImage" />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteProduct(product))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsSelect;
