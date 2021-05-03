import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AuthPageProps {}

const AuthPage = (_props: AuthPageProps) => {
  return (
    <View style={styles.container}>
      <Text>AuthPage</Text>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {},
});
