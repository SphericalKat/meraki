import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Headline, Text, TextInput, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AuthPageProps {}

const AuthPage = (_props: AuthPageProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Headline style={styles.title}>{signUp ? 'Sign Up' : 'Login'}</Headline>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={!showPass}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        right={
          <TextInput.Icon
            name={() => (
              <MaterialCommunityIcons
                name="eye"
                size={24}
                color={theme.colors.primary}
              />
            )}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          // validate details
        }}>
        {signUp ? 'Sign Up' : 'Login'}
      </Button>
      <View style={styles.row}>
        <Text>
          {signUp ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <Button onPress={() => setSignUp(!signUp)}>
          {signUp ? 'Login' : 'Sign Up'}
        </Button>
      </View>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textInput: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },
  button: {
    marginTop: 16,
    padding: 8,
  },
  row: {
    marginTop: 16,
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
