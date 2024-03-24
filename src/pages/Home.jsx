import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductErrorState,
  getProductLoadingState,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const isLoading = useSelector(getProductLoadingState);
  const isError = useSelector(getProductErrorState);

  console.log("ProductList", productsList);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h2>{isError}</h2>
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price * 80}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
