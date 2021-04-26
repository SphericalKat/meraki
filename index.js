/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {name as appName} from './app.json';

const fontFamily = {
  regular: {
    fontFamily: 'Inter-Regular',
    fontWeight: 'normal',
  },

  medium: {
    fontFamily: 'Inter-Medium',
    fontWeight: 'normal',
  },

  light: {
    fontFamily: 'Inter-Light',
    fontWeight: 'normal',
  },

  thin: {
    fontFamily: 'Inter-Thin',
    fontWeight: 'normal',
  },
};

const fontConfig = {
  web: fontFamily,
  ios: fontFamily,
  android: fontFamily,
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCBCC7',
    accent: '#FCBCC7',
  },
};

const main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => main);
