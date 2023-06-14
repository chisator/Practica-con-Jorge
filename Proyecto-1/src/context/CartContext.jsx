import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const agregarAlCarrito = () => {
    console.log("se agrego");
  };
  let data = {
    cart,
    setCart,
    agregarAlCarrito,
  };
  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};

