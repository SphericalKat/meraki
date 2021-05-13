import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

interface AppbarProps {
  showSearch?: boolean;
  title?: string;
}

const AppBar = ({showSearch, title = 'meraki'}: AppbarProps) => {
  const theme = useTheme();

  return (
    <View style={styles.appbar}>
      <Text style={[styles.title, {color: theme.colors.primary}]}>{title}</Text>
      {showSearch && (
        <Appbar.Action
          icon={({size}) => (
            <Feather name="search" size={size} color={theme.colors.primary} />
          )}
          onPress={() => console.log('Search pressed!')}
        />
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {},
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    // padding: 24,
  },

  title: {
    fontFamily: 'Wishingly',
    color: 'black',
    fontSize: 32,
  },
});
