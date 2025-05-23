import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/card-context";

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const addCartToHandler = (amount) => {
    ctx.addItem({ id: meal.id, name: meal.name, amount, price: meal.price });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addCartToHandler} />
      </div>
    </li>
  );
};

export default MealItem;
