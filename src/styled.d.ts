import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    above: any;
    below: any;
    font: string;
    boxShadows: string[];
    borderRadius: number[];
    borders: string[];
    spaces: number[];
    fontSizes: number[];
    fontWeight: number[];
    colors: {
      white: string;
      white03: string;
      gray: string;
      gray04:string;
      gray09: string;
      darkGray: string;
    };
  }
}
