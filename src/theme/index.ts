import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

const font = 'Roboto, sans-serif';

const white = '#ffffff';
const white03 = 'rgba(255, 255, 255, 0.3)';
const gray = '#3D4B60';
const gray04 = 'rgba(61, 75, 96, 0.4)';
const gray09 = 'rgba(61, 75, 96, 0.9)';
const darkGray = '#282F41';

const boxShadows = ['0px 10px 30px 10px rgba(2, 37, 63, 0.6)'];

const borders = ['1px solid #fff'];

const sizes = {
  xs: 650,
  small: 768,
  md: 992,
  large: 1200,
};

const above = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<{ x: string }> }
);

const below = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<{ x: string }> }
);

export const defaultTheme: DefaultTheme = {
  above,
  below,
  boxShadows,
  borderRadius: [15],
  borders,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 64, 72],
  fontWeight: [100, 300, 400],
  colors: {
    white,
    white03,
    gray,
    gray04,
    gray09,
    darkGray
  },
};

