import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Line } from "../../components/Line";
import BitImage from "../../assets/bitcoin.png";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Container, Wrapper, Title, Top, TopButton, TopTexts, TopText, Bottom, Info, Product, ProductDetail, Image, Details, ProductName, ProductId, ProductAmountContainer, ProductAmount, ProductPrice, Hr, PriceDetail, Summary, SummaryTitle, SummaryButton, SummaryItem, SummaryItemText, SummaryItemPrice } from "./style";

const Checkout = () => {
    return (<>
        <Container>
        <Header />
        <Line />
            <Wrapper>
                <Title>Checkout</Title>
                <Top>
                    <TopButton>Continuar Comprando</TopButton>
                    <TopTexts>
                        <TopText>Seu Carrinho(2)</TopText>
                        <TopText>Favoritos</TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={BitImage} />
                                <Details>
                                    <ProductName><b>Coin:</b> Bitcoin</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 79,90</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={BitImage} />
                                <Details>
                                    <ProductName><b>Coin:</b> Bitcoin</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 79,90</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Resumo do Pedido</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R$ 79,90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descontos</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>R$ 79,90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Finalizar Compra</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer />
        </Container>
    </>
    );
}

export default Checkout;