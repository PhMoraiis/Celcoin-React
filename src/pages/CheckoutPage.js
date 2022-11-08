import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import Context from "../Context";


export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useContext(Context);

  function getTotal() {
    return cart.reduce((acc, curr) => acc + curr, 0);
  }

  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      <p>Confira os produtos selecionados e clique em finalizar compra para concluir a transação.</p>
      <div className="products">
        {
          cart.map((product, index) => {
            return (
              <div key={index} className="product">
                {product.icon} {product.name} - R$ {product.price.toFixed(2).toString().replace(".", ",")}
              </div>
            )
          })
        }
      </div>
      <div className="register">
        <h2>Total da Compra: R$ {getTotal()}</h2>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    </div>
  );
}