import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    margin-top: 32px;
    border-radius: 24px;
    box-shadow: 0px 16px 22px -16px rgb(15 50 86 / 32%);
    padding: 30px;
    min-height: 200px;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
    }
`;

export const Image = styled.img`
    height: 31.51px;
    width: 31.51px;
    margin-bottom: 14px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 23.6px;
    color: #646464;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Segment = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 16.4px;
    color: #646464;
`;

export const Description = styled.h3`
    padding-top: 45px;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.4px;
    color: #646464;

`;

export const Price = styled.h3`
    margin: 0 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.4px;
    color: #646464;
`;