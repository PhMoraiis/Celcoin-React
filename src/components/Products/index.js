import { productsList } from "../../../src/components/Products/List";
import './style.css';

import Product from "../Product";

function Products(props) {
    const { updateTotalPrice } = props;

    function buildProductsList() {
        return productsList.map(product => {
            return (
                <Product
                    name={product.title}
                    icon={product.icon}
                    price={product.price}
                    updateTotalPrice={(price) => updateTotalPrice(price)}
                />
            )
        })
    }

    const products = buildProductsList();
    return (
        <div className="Products">
            {products}
        </div>
    )
}

export default Products;