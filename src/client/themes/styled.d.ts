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
  }
}
