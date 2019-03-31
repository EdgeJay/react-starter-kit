import { createGlobalStyle, css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import styledNormalize from 'styled-normalize';
import defaultTheme from './defaultTheme';

export { defaultTheme };

export const BASE_FONT_PIXEL_SIZE = 10;

const minScreenPixelWidths = {
  tablet: 640,
  desktop: 1280,
  desktopLarge: 1920,
};

export const media = (Object.keys(minScreenPixelWidths) as Array<
  keyof typeof minScreenPixelWidths
>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${minScreenPixelWidths[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as { [key in keyof typeof minScreenPixelWidths]: ThemedCssFunction<DefaultTheme> }
);

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    min-height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  #mount {
    height: 100vh;
  }

  h1 {
    font-size: ${props => props.theme.typo.h1.fontSize.phone};
  }

  h2 {
    font-size: ${props => props.theme.typo.h2.fontSize.phone};
  }

  h3 {
    font-size: ${props => props.theme.typo.h3.fontSize.phone};
  }

  h4 {
    font-size: ${props => props.theme.typo.h4.fontSize.phone};
  }

  body, p, button, label {
    font-size: ${props => props.theme.typo.p.fontSize.phone};
  }

  ${media.desktop`
    h1 {
      font-size: ${props => props.theme.typo.h1.fontSize.desktop};
    }

    h2 {
      font-size: ${props => props.theme.typo.h2.fontSize.desktop};
    }

    h3 {
      font-size: ${props => props.theme.typo.h3.fontSize.desktop};
    }
  `};
`;
