import { Link } from "react-router-dom"
import Counter from "../../common/counter/Counter";
import { useState } from "react";
const Home = () => {
  const [contador, setContador] = useState(0)
  const sumar = () => {
    setContador(contador +1)
  }
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to={"/login"}>Iniciar sesion</Link>
      <br />
      <Link to={"/products"}>Productos</Link>
      <Counter contador={contador} sumar={sumar}></Counter>
    </div>
  );
};

export default Home;
