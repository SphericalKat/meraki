import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HistoryPageProps {}

const HistoryPage = (_props: HistoryPageProps) => {
  return (
    <View style={styles.container}>
      <Text>HistoryPage</Text>
    </View>
  );
};

export default HistoryPage;

const styles = StyleSheet.create({
  container: {},
});
