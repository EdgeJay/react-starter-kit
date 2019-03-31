import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import defaultTheme from './defaultTheme';

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

export { defaultTheme };
