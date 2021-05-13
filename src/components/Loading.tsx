import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import * as Progress from 'react-native-progress';

interface LoadingProps {}

const Loading = (_props: LoadingProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <Progress.Circle
          size={48}
          color={theme.colors.primary}
          borderWidth={6}
          indeterminate
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    width: '100%',
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
