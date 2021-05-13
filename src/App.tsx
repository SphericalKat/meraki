import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from './components/TabNavigator';
import * as SecureStore from 'expo-secure-store';
import AuthPage from './pages/AuthPage';
import {useAppDispatch, useAppSelector} from './store/hooks';
import {setToken} from './store/token';
import auth from '@react-native-firebase/auth';

const App = () => {
  const token = useAppSelector(state => state.token.value);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    async function getToken() {
      if (user != null) {
        const t = await user.getIdToken();
        SecureStore.setItemAsync('TOKEN', t);
        dispatch(setToken(t));
      }
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);
    });

    if (loading) {
      setLoading(false);
    }

    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <View style={[styles.container]}>
      <PlatformStatusBar backgroundColor="transparent" />
      <View style={styles.content}>
        {token ? <TabNavigator /> : <AuthPage />}
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
    backgroundColor: Colors.lighter,
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
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
  },
});

export default App;
