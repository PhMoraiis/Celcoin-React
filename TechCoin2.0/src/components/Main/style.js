import styled, { css } from "styled-components";

export const Container = styled.div`
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 100px 50px;
`;

export const FirstTitle = styled.h4`
    color: #1f1e30;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    margin: 0px .5rem;
`;

export const SecondTitle = styled.h2`
    color: #1f1e30;
    text-align: left;
    font-size: 4rem;
    margin-top: 1rem;
`;

export const Paragraph = styled.p`
    color: #646464;
    text-align: left;
    font-size: 1.1rem;
    line-height: 25px;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
`;

export const ImgContainer = styled.div`
    flex: 1;
    margin-top: 2.5rem;
`;

export const Image = styled.img`
    height: 65vh;
    object-fit: cover;
    margin-bottom: -20rem;
`;

export const ImageTwo = styled.img`
    width: 100%;
    height: 65vh;
    object-fit: cover;
    opacity: 0.9;
`;