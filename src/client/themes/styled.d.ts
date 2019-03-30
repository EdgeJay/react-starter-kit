import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    fontSize: string;
    header: {
      backgroundColor: string;
    };
    sideMenu: {
      backgroundColor: string;
    };
    content: {
      backgroundColor: string;
    };
    typo: {
      h1: {
        fontSize: string;
      };
      h2: {
        fontSize: string;
      };
      h3: {
        fontSize: string;
      };
      h4: {
        fontSize: string;
      };
      p: {
        fontSize: string;
      };
    };
  }
}
