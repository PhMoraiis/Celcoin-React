import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        background: rgb(235,244,245);
        background: linear-gradient(90deg, rgba(235,244,245,1) 49%, rgba(181,198,224,1) 100%);
        color: #1F1E30;
    }
`;