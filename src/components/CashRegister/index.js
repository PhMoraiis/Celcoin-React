export default function CashRegister({ total }) {
  return <p><strong>Total da compra:</strong> R$ {total.toFixed(2)}</p>
}