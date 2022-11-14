import React from "react";
import { popularProducts } from "../../../data";
import { Product } from "../Product";

import { Container } from "./style";

const Products = () => {
    return (<>
        <Container>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
                ))}
        </Container>
                </>
    )
}

export { Products }