import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const endPoint = "https://fakestoreapi.com/products";
  useEffect(() => {
    const productos = async () => {
      const getProduct = axios.get(endPoint);
      const res = await getProduct;
      setProducts(res.data);
    };
    productos();
  }, [endPoint]);
  return (
    <>
      <h1>ProductsList</h1>
      <Link to={"/"}>Volver al home</Link>
      {products ? <h2>hola</h2> : null}
      {products?.map((elemneto) => {
        return (
          <div key={elemneto.id}>
            <img src={elemneto.image} alt="" />
            <h2>{elemneto.title}</h2>
            <h2>{elemneto.price}</h2>
          </div>
        );
      })}
    </>
  );
};
