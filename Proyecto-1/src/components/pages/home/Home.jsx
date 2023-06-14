import { Link } from "react-router-dom"

const Home = () => {
  
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to={"/login"}>Iniciar sesion</Link>
      <br />
      <Link to={"/cart"}>cart</Link>
      <br />
      <Link to={"/products"}>Productos</Link>
    </div>
  );
};

export default Home;
