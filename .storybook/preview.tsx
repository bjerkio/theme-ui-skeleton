import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from '@theme-ui/preset-base';
import { ThemeProvider } from 'theme-ui';

addDecorator((story) => (
  <ThemeProvider theme={theme as any}>{story()}</ThemeProvider>
));

configure([require.context('../stories/', true, /\.stories\.(tsx|mdx)$/)], module);