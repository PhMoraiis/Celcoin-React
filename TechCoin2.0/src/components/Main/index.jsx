import React from "react";

import { Container, Wrapper, InfoContainer,  FirstTitle, Paragraph, SecondTitle, ImgContainer, Image, ImageTwo } from "./style";
import { Button } from "./../Button";
import imageHome1 from "../../assets/grupo1.svg";
import imageHome2 from "../../assets/group2.svg";
import { Header } from "../Header";

const Main = () => {
    return (
        <Container>
            <Wrapper>
                <InfoContainer>
                    <FirstTitle>Bem vindo</FirstTitle>
                    <SecondTitle>A revolução financeira na tecnologia</SecondTitle>
                    <Paragraph>Inovando o mercado financeiro de um jeito simples e moderno a Tech Coin, chega para te ajudar a ter sua independência quando o assunto é BitCoins, ou melhor UltraCoins.</Paragraph>
                    <Button title="Saiba mais" />
                    <Button title="Compre Agora" variant="secondary" />
                </InfoContainer>
                <ImgContainer>
                    <Image src={imageHome1} alt="Coin" />
                    <ImageTwo src={imageHome2} alt="Coin" />
                </ImgContainer>
            </Wrapper>
        </Container>
    );
}

export { Main };

/* <Container>
                <TextContainer>
                    <FirstTitle>Bem vindo</FirstTitle>
                    <SecondTitle>A revolução financeira na tecnologia</SecondTitle>
                    <Paragraph>Inovando o mercado financeiro de um jeito simples e moderno a Tech Coin, chega para te ajudar a ter sua independência quando o assunto é BitCoins, ou melhor UltraCoins.</Paragraph>
                    <Button title="Saiba mais" />
                    <Button title="Compre Agora" variant="secondary" />
                </TextContainer>
                <ContainerImage>
                    <HomePicture src={imageHome1} alt="Coin" />
                </ContainerImage>
                <ContainerImageTwo>
                    <HomePicture src={imageHome2} alt="Coin" />
                </ContainerImageTwo>
            </Container>

            */