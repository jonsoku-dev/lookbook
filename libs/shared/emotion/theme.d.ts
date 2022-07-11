import '@emotion/react';
import defaultTheme from './src/lib/theme';

type CustomTheme = typeof defaultTheme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
}
