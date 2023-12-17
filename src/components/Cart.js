import { useSelector, useDispatch } from "react-redux";
import MenuItems from "./MenuItem";
import { clearCart } from "../utils/redux/cartSlice";
export default Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (cartItems.length) dispatch(clearCart());
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">Cart Items</h1>
        <button
          className="bg-red-500 rounded-md text-center"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.map((item) => {
        return <MenuItems key={item.id} {...item} />;
      })}
    </>
  );
};
