import { useReducer } from "react";
import CartContext from "./card-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let items;

    if (existingCartItem) {
      const item = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      items = [...state.items];
      items[existingCartItemIndex] = item;
    } else {
      items = state.items.concat(action.item);
    }

    return {
      items,
      totalAmount,
    };
  } else if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    let item = state.items[itemIndex];
    const totalAmount = state.totalAmount - item.price;

    let items;

    if (item.amount === 1) {
      items = state.items.filter((item) => item.id !== action.id);
    } else {
      item = {
        ...item,
        amount: (item.amount -= 1),
      };
      items = [...state.items];
      items[itemIndex] = item;
    }

    return {
      items,
      totalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cardState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={{ ...cartContext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
