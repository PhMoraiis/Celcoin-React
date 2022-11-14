import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #1F1E30;
    color: #EBF4F5;
    padding: 1rem 2rem;
    border-radius: 22px;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
        background: transparent;
        color: #1F1E30;
        border: 1px solid #1F1E30;
        border-radius: 22px;
        transition: 1s all;
    }

    ${({ variant }) => variant !== "primary" && css`
        background: transparent;
        color: #1F1E30;
        border: 1px solid #1F1E30;
        padding: 1rem 2rem;
        border-radius: 22px;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;

        &:hover {
            background: #1F1E30;
            color: #EBF4F5;
            transition: 1s all;
        }
    `}
`;