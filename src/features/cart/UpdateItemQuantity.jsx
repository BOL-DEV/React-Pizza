import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemsQuantity, increaseItemsQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  //   console.log(pizzaId);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemsQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemsQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
