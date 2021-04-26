import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Button, FAB, Appbar, useTheme} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  return (
    <View>
      <SafeAreaView style={backgroundStyle}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content title="Meraki" />
        </Appbar.Header>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.primary}
        />

        <FAB icon="plus" style={styles.fab} onPress={console.log} />

        <View style={styles.buttonContainer}>
          <Button icon="camera" mode="contained" onPress={console.log}>
            Click me!
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

export default App;
