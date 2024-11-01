import { useState } from "react";
import { Products } from "../../data/Products";
import Product from "./Product";

export default function Shop() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <h1>Available Items</h1>
      <div className="row">
        {Products.map( productData => <Product key={productData.id} data={productData} />)}
      </div>
    </>
  );
}
