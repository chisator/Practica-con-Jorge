import {Link} from "react-router-dom"
const Home = () => {
  return <div>
    <h1>Este es el home</h1>
    <Link to={"/login"}>Iniciar secion</Link>
    </div>;
};

export default Home;
