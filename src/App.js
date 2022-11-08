import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Context from "./Context";
import { useState } from "react";

export default function App() {

  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ cart, setCart }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  );
}