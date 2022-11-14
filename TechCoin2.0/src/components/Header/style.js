import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 3rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1rem;
    line-height: 25px;
    color: #1F1E30;
    margin-right: 3rem;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        transition: 0.3s;
    }
`;

export const MenuContact = styled.a`
    border: 1px solid #1F1E30;
    padding: 1rem 1.5rem;
    border-radius: 22px;

    &:hover {
        background-color: #1F1E30;
        color: #ebf4f5;
        transition: 1s;
    }
`;

export const Logo = styled.a`
    font-family: 'Staatliches', 'Josefin Sans', sans-serif;
    font-size: 3rem;
    line-height: 25px;
    letter-spacing: 3px;
    color: #1F1E30;
    text-decoration: none;
    cursor: pointer; 

    &:hover {
        transition: 0.3s ease;
        transform: scale(1.1);
    }
`;
