import styled from 'styled-components';

export const Container = styled.div`
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

export const ImgContainer = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    height: 90vh;
    object-fit: cover;
    margin-top: -70px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 100px 50px;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 40px;
`;

export const TitleDesc = styled.h2`
    font-weight: 500;
    margin-top: 30px;
`;

export const Desc = styled.p`
    margin: 20px 0px;
    margin-bottom: 50px;
`;

export const Price = styled.span`
    font-weight: 500;
    font-size: 40px;
`;

export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 50px;
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

export const Amount = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 22px;
    border: 1px solid #1F1E30;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

export const Button = styled.button`
    padding: 15px;
    border: 1px solid #1F1E30;
    background-color: #EFEFEF;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    border-radius: 22px;

    &:hover {
        background-color: #1F1E30;
        color: #EFEFEF;
        transform: scale(1.05);
        transition: all 0.5s ease;
    }
`;




