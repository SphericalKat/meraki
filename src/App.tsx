import React from 'react';
import {
  Platform,
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

  const PlatformStatusBar: React.FC<{backgroundColor: string}> = ({
    backgroundColor,
  }) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={backgroundColor}
          translucent
          barStyle="dark-content"
        />
      </SafeAreaView>
    </View>
  );

  return (
    <View style={[styles.container, backgroundStyle]}>
      <PlatformStatusBar backgroundColor={theme.colors.primary} />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Meraki" />
      </Appbar.Header>

      <FAB icon="plus" style={styles.fab} onPress={console.log} />

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button icon="camera" mode="contained" onPress={console.log}>
            Click me!
          </Button>
        </View>
      </View>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  appbar: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    height: APPBAR_HEIGHT,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
  },
});

export default App;
