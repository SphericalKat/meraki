import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CatalogPageProps {}

const CatalogPage = (_props: CatalogPageProps) => {
  return (
    <View style={styles.container}>
      <Text>CatalogPage</Text>
    </View>
  );
};

export default CatalogPage;

const styles = StyleSheet.create({
  container: {},
});
