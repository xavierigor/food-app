import { createGlobalStyle } from "styled-components";
import { metrics } from "../styles/metrics";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Playfair+Display:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body, button, input {
        /* font-family: 'Montserrat', sans-serif; */
        font: 14px 'Montserrat', sans-serif !important;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif !important;
    }

    label {
        color: ${metrics.colors.primary};
        font-weight: 600;
        display: block;
        margin-bottom: ${metrics.margin.sm};
    }
`;
