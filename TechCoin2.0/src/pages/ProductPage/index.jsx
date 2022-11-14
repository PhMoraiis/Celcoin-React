import React from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Line } from "../../components/Line";
import BitImage from "../../assets/bitcoin.png";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, Price, AddContainer, AmountContainer, Amount, Button, TitleDesc } from "./style";

const ProductPage = () => {
    return (<>
        <Container>
        <Header />
        <Line />
            <Wrapper>
                <ImgContainer>
                    <Image src={BitImage} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Bitcoin</Title>
                    <TitleDesc>O que é Bitcoin (BTC)?</TitleDesc>
                    <Desc>Bitcoin é uma moeda digital que permite pagamentos em transações online sem a necessidade de um intermediário. Baseada na rede blockchain, foi a pioneira entre as criptomoedas.</Desc>
                    <Price>R$ 92.146,69</Price>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>Adicionar ao carrinho</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        <Footer />
        </Container>
    </>
    )
}

export default ProductPage;