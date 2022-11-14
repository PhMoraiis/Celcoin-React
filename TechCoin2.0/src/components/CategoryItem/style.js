import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #EBF4F5;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #EBF4F5;
    color: #646464;
    cursor: pointer;
    font-weight: 600;
    opacity: 0.9;
    border-radius: 22px;

    &:hover {
        transform: scale(1.05);
        background-color: #1F1E30;
        color: #EBF4F5;
        opacity: 1;
        transition: all 0.5s ease;
    }
`;