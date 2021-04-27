import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Appbar, useTheme} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from './components/TabNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  const PlatformStatusBar: React.FC<{backgroundColor: string}> = ({
    backgroundColor,
  }) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
      </SafeAreaView>
    </View>
  );

  return (
    <View style={[styles.container, backgroundStyle]}>
      <PlatformStatusBar backgroundColor="transparent" />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content titleStyle={styles.title} title="Meraki" />
        <Appbar.Action
          icon={({size, color}) => (
            <Feather name="search" size={size} color={color} />
          )}
          onPress={() => console.log('Search pressed!')}
        />
      </Appbar.Header>

      <View style={styles.content}>
        <TabNavigator />
      </View>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

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
    shadowColor: '#FCBCC7',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.0,
    elevation: 24,
    zIndex: 100,
  },
  appbar: {
    height: 72,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    elevation: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
  },
});

export default App;
