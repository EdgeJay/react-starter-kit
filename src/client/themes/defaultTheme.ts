import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  fontFamily: 'Helvetica Neue',
  fontSize: '10px',
  header: {
    backgroundColor: 'darkblue',
  },
  sideMenu: {
    backgroundColor: 'darkgrey',
  },
  content: {
    backgroundColor: 'lightgrey',
  },
  typo: {
    h1: {
      fontSize: {
        phone: '3.2rem',
        desktop: '4.8rem',
      },
    },
    h2: {
      fontSize: {
        phone: '2.6rem',
        desktop: '3.6rem',
      },
    },
    h3: {
      fontSize: {
        phone: '2.2rem',
        desktop: '2.8rem',
      },
    },
    h4: {
      fontSize: {
        phone: '1.8rem',
      },
    },
    p: {
      fontSize: {
        phone: '1.6rem',
      },
    },
  },
};

export default defaultTheme;
