import { useState } from "react";
import Products from "./components/Products";
import CashRegister from "../src/components/CashRegister";

function App () {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <main>
        <CashRegister total={total} />
        <Products
          updateTotalPrice={(price) => setTotal(total + price)}
        />
      </main>
    </div>
  );
}

export default App;