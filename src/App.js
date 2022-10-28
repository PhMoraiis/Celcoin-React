import { useState } from "react";
import './App.css';

function App() {
  const [contador, setContador] = useState(0);


  function soma() {
    setContador(contador + 5);
  }

  function subtrai() {
    setContador(contador - 5);
  }


  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={soma}>+</button>
      <button onClick={subtrai}>-</button>
    </div>
  );
}

export default App;