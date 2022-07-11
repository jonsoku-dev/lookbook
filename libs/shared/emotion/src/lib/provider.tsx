import React from 'react';
import {
  css,
  Global,
  ThemeProvider as EmotionThemeProvider,
  useTheme,
} from '@emotion/react';
import defaultTheme from './theme';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: font-face-apple-system, BlinkMacSystemFont,
            'Helvetica Neue', 'Roboto', 'Droid Sans', 'ヒラギノ角ゴシック',
            'Hiragino Sans', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        input,
        textarea {
          font-family: font-face-apple-system, BlinkMacSystemFont,
            'Helvetica Neue', 'Roboto', 'Droid Sans', 'ヒラギノ角ゴシック',
            'Hiragino Sans', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN',
            sans-serif;
        }

        *,
        *::after,
        *::before {
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }

        input,
        button,
        select,
        textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: transparent;
          border: none;
          border-radius: 0;
          font: inherit;
          outline: none;
        }

        textarea {
          resize: vertical;
        }

        input[type='checkbox'],
        input[type='radio'] {
          display: none;
        }

        input[type='submit'],
        input[type='button'],
        label,
        button,
        select {
          cursor: pointer;
        }

        select::-ms-expand {
          display: none;
        }

        button {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          margin: 0;
          padding: 0;

          &:disabled {
            cursor: not-allowed;
            background-color: ${theme.colors.disabled};
            color: ${theme.colors.white};
          }
        }
      `}
    />
  );
};

interface ThemeProviderProps {
  theme?: Record<string, any>;
  children: JSX.Element | JSX.Element[];
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: themeProp,
  children,
}) => (
  <EmotionThemeProvider theme={{ ...defaultTheme, ...(themeProp ?? {}) }}>
    <GlobalStyles />
    {children}
  </EmotionThemeProvider>
);
export default ThemeProvider;
