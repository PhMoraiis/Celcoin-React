import React from "react";

import { Container, Image, Info, Title, Button } from "./style";

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Compre Agora</Button>
            </Info>
        </Container>
    )
}

export { CategoryItem }