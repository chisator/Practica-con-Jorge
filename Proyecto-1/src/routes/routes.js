import Cart from "../components/pages/cart/Cart";
import Home from "../components/pages/home/Home";

import { ProductsList } from "../components/pages/productsList/ProductsList";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "productList",
    path: "/products",
    Element: ProductsList,
  },
];
