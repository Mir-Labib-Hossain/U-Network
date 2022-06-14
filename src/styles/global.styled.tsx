import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *{
        margin: 0;
        padding: 0;
        transition: .5s ;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    a{
        text-decoration: none;
    }
    button{
        border: none;
        background-color: transparent;
    }
   
    .activeLink{
        i,p{
            color: white;
        }
        background-color: #0CCA8F;
    }

    p,span,h1,*{
        font-family: 'Dosis', sans-serif;
    }
`;

export default GlobalStyle;
