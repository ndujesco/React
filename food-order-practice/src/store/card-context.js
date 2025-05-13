import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 5,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
