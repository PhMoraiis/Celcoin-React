import React from "react";
import { Container, Menu, Row, Wrapper, Logo, MenuContact } from "./style";

const Header = () => {
    return (<>
        <Wrapper>
            <Container>
                <Row>
                    <Menu>Home</Menu>
                    <Menu>UltraCoins</Menu>
                </Row>
                <Row>
                    <Logo>Tech Coin</Logo>
                </Row>
                <Row>
                    <Menu>Cadastre-se</Menu>
                    <MenuContact>Contato</MenuContact>
                </Row>
            </Container>
        </Wrapper>
    </>
    );
}

export { Header };