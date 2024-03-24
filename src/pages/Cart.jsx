import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import {
  getAllCartItems,
  getCartErrorState,
  getCartLoadingState,
} from "../store/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector(getAllCartItems);

  const isLoading = useSelector(getCartLoadingState);
  const error = useSelector(getCartErrorState);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price * 80}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            ₹
            {cartItems.reduce(
              (acc, curr) => acc + curr.quantity * curr.price,
              0
            ) * 80}
          </div>
        </div>
      </div>
    </div>
  );
}
