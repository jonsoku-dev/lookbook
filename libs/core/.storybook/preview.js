import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../../shared/emotion/src/lib/provider';
import theme from '../../shared/emotion/src/lib/theme';

addDecorator(withThemes(ThemeProvider, [theme]));
