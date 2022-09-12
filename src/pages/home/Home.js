import ProductCart from "../../components/cart/product cart/productCart";
import "./Home.sass";
import CheckoutCard from "../../components/carousel/carousel";
import { useStateValue } from "../../stateProvider";
function Home() {
  const [state] = useStateValue();
  return (
    <div className="homePage container">
      <CheckoutCard />
      {state.productsApi.map((product) => {
      return (
        <ProductCart
          id= {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          speed={product.speed}
          image={product.image}
          rating={product.rating}
        />
      );
    })} 
     
    </div>
  );
}

export default Home;
