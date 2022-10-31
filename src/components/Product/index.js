import { useState } from "react";
import './style.css';

function Product(props) {
    const [selected, setSelected] = useState(false);
    const { name, icon, price, updateTotalPrice } = props;

    function handleSelect() {
        const isSelected = !selected;
        if (isSelected) updateTotalPrice(price);
        else updateTotalPrice(price * -1)

        setSelected(isSelected)
    }

    function checkSelected() {
        let classes = "product";
        if (selected) {
            classes = "product selected";
        }
        return classes;
    }

    return (
        <div className="Product">
            <div className={checkSelected()} onClick={handleSelect}>
                <p className="name">{name}</p>
                <p className="icon">{icon}</p>
                <p className="price">R$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Product;