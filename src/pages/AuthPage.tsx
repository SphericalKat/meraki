import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Headline,
  HelperText,
  Snackbar,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import Loading from '../components/Loading';

interface AuthPageProps {}

const AuthPage = (_props: AuthPageProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passError, setPassError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [showSnack, setShowSnack] = React.useState('');

  const theme = useTheme();

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <View style={styles.container}>
        <Headline style={styles.title}>{signUp ? 'Sign Up' : 'Login'}</Headline>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={t => {
            setEmail(t);
            setEmailError(false);
          }}
          textContentType="emailAddress"
          returnKeyType="next"
          error={emailError}
        />
        <HelperText type="error" visible={emailError}>
          Enter a valid email address!
        </HelperText>
        <TextInput
          style={styles.textInput}
          secureTextEntry={!showPass}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={t => {
            setPassword(t);
            setPassError(false);
          }}
          textContentType="password"
          returnKeyType="go"
          error={passError}
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
        <HelperText type="error" visible={passError}>
          Password must be at least 8 characters long!
        </HelperText>
        <Button
          style={styles.button}
          mode="contained"
          onPress={async () => {
            setLoading(true);
            const emailErr = email.length <= 2;
            const passErr = password.length < 8;
            setEmailError(emailErr);
            setPassError(passErr);

            if (emailErr || passErr) {
              setLoading(false);
              return setShowSnack('Please fix the errors before proceeding.');
            }

            if (signUp) {
              try {
                await auth().createUserWithEmailAndPassword(email, password);
              } catch (e) {
                console.log(e);

                switch (e.code) {
                  case 'auth/email-already-in-use':
                    setShowSnack(
                      'This email is already registered, try logging in instead!',
                    );
                    break;
                }
              }
            } else {
              try {
                await auth().signInWithEmailAndPassword(email, password);
              } catch (e) {
                switch (e.code) {
                  case 'auth/user-not-found':
                    setShowSnack(
                      "An account with this email doesn't exist! Try signing up instead.",
                    );
                    break;
                  case 'auth/wrong-password':
                    setShowSnack('Password is incorrect!');
                    break;
                }
              }
            }
            setLoading(false);
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
      <Snackbar
        style={{backgroundColor: theme.colors.primary}}
        visible={!!showSnack}
        action={{
          label: 'Dismiss',
          onPress: () => setShowSnack(''),
        }}
        onDismiss={() => setShowSnack('')}>
        {showSnack}
      </Snackbar>
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
    width: '100%',
  },
  title: {
    fontFamily: 'Metropolis-Bold',
    marginBottom: 16,
  },
  textInput: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    marginTop: 16,
    padding: 8,
  },
  buttonText: {
    color: 'white',
  },
  row: {
    marginTop: 16,
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
