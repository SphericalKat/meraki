import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface FavoritesPageProps {}

const FavoritesPage = (_props: FavoritesPageProps) => {
  return (
    <View style={styles.container}>
      <Text>FavoritesPage</Text>
    </View>
  );
};

export default FavoritesPage;

const styles = StyleSheet.create({
  container: {},
});
