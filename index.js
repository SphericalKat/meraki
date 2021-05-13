import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const fontFamily = {
  regular: {
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'normal',
  },

  medium: {
    fontFamily: 'Metropolis-Medium',
    fontWeight: 'normal',
  },

  light: {
    fontFamily: 'Metropolis-Light',
    fontWeight: 'normal',
  },

  thin: {
    fontFamily: 'Metropolis-Thin',
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
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#150A42',
    accent: '#FE8303',
    disabled: '#c29199',
  },
};

const client = new ApolloClient({
  uri: 'http://192.168.1.48:4000/graphql',
  cache: new InMemoryCache(),
});

const main = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <App />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => main);
