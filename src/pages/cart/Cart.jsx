import React, { useContext } from "react";
import { Products } from "../../data/Products";
import { ShopContext } from "../../context/ShopContext";
import Product from "../shop/Product";

export default function Cart() {
  const { cartItems, resetCart } = useContext(ShopContext);
  return (
    <>
      <h1>Your cart items</h1>
      <div className="row ">
        {Products.map((p) => {
          if (cartItems?.some((item) => item.id === p.id && item.count > 0))
            return <Product key={p.id} data={p} />;
        })}
      </div>
      <button className="btn btn-warning my-3" onClick={resetCart} >Reset</button>
    </>
  );
}
