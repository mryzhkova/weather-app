import { createGlobalStyle } from 'styled-components';

import background from '@/assets/images/back.jpg';
import { defaultTheme } from '@/theme';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${defaultTheme.font};
  }

  body {
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }

  body {
    & > #root {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${defaultTheme.colors.white03};
      @media (max-width: 992px) {
        width: auto;
        height: auto;
        display: block;
      }
    }
  }
`;
