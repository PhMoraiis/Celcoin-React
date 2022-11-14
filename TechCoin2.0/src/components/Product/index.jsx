import React from "react";

import { Container, Image, Info, Title, Description, Price, ContainerText, Segment } from "./style";

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.icon} />
            <Info>
                <Title>{item.title}</Title>
                <ContainerText>
                <Segment>{item.segment}</Segment>
                <Description>{item.description}</Description>
                <Price>{item.price}</Price>
                </ContainerText>
            </Info>
        </Container>
    )
}

export { Product }