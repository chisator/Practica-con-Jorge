import { useContext } from "react";
import { DarkContext } from "../../context/DarkContext";

const Navbar = () => {
  const {switchMode} = useContext(DarkContext)
  return (
    <div>
      <ul>
        <li>Productos</li>
        <li>About</li>
        <li>contacto</li>
      </ul>
      <button onClick={() => switchMode}>Cambiar modo</button>
    </div>
  );
};

export default Navbar;
