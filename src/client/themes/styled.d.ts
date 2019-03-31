import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    fontSize: string;
    header: {
      backgroundColor: string;
      height: string;
      nav: {
        itemSpacing: string;
        textColor: string;
        fontSize: {
          phone: string;
        };
      };
    };
    sideMenu: {
      backgroundColor: string;
    };
    content: {
      backgroundColor: string;
    };
    typo: {
      h1: {
        fontSize: {
          phone: string;
          tablet?: string;
          desktop?: string;
          desktopLarge?: string;
        };
      };
      h2: {
        fontSize: {
          phone: string;
          tablet?: string;
          desktop?: string;
          desktopLarge?: string;
        };
      };
      h3: {
        fontSize: {
          phone: string;
          tablet?: string;
          desktop?: string;
          desktopLarge?: string;
        };
      };
      h4: {
        fontSize: {
          phone: string;
          tablet?: string;
          desktop?: string;
          desktopLarge?: string;
        };
      };
      p: {
        fontSize: {
          phone: string;
          tablet?: string;
          desktop?: string;
          desktopLarge?: string;
        };
      };
    };
  }
}
