import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AuthPageProps {}

const AuthPage = (_props: AuthPageProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.password, styles.textInput]}
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
      <Button style={styles.button} mode="contained" onPress={console.warn}>
        Login
      </Button>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    height: '100%',
  },
  textInput: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  password: {
    marginTop: 16,
  },
  button: {
    marginLeft: 'auto',
    marginTop: 16,
    padding: 8,
  },
});
