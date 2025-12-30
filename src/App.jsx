import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  // ❗ useMemo to avoid recalculating total price
  const totalPrice = useMemo(() => {
    console.log("💰 Total price calculated");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  // ❗ useCallback to prevent function recreation
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}

export default App;
