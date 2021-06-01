import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body, #root {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
