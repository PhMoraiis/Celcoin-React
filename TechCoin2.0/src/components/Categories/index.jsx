import React from "react";
import { categories } from "./../../../data";
import { CategoryItem } from "../CategoryItem";

import { Container, TitlePage } from "./style";

const Categories = () => {
    return (<>
        <TitlePage>Escolha a sua categoria favorita.</TitlePage>
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item}/>
                ))}
        </Container>
                </>
    )
}

export { Categories }