import React from "react";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import { Line } from "../../components/Line";
import { Products } from "../../components/Products";

import { Container, Title, FilterContainer, Filter, FilterText, Select, Option, SubTitle } from "./style";

const ProductList = () => {
    return (
        <Container>
            <Header />
            <Line />
            <Title>Criptomoedas</Title>
            <SubTitle>Conheça as nossas opções para começar hoje a sua jornada no mundo financeiro.</SubTitle>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Coins:</FilterText>
                    <Select>
                        <Option selected>
                            Todas
                        </Option>
                        <Option>Bitcoin</Option>
                        <Option>Ethereum</Option>
                        <Option>Polkadot</Option>
                        <Option>Litecoin</Option>
                        <Option>Cardano</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar Coins:</FilterText>
                    <Select>
                        <Option selected>Recentes</Option>
                        <Option>Menor Preço</Option>
                        <Option>Maior Preço</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    );
};

export default ProductList;