import {gql, useQuery} from '@apollo/client';
import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';
import {Item} from '../types';

interface HomePageProps {}

const HomePage = (_props: HomePageProps) => {
  const ITEMS_QUERY = gql`
    query Item {
      allInventoryItems {
        id
        name
        price
        imageURL
        description
      }
    }
  `;

  interface Items {
    allInventoryItems: Item[];
  }

  const {loading, error, data} = useQuery<Items>(ITEMS_QUERY, {
    pollInterval: 500,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView removeClippedSubviews={true}>
        <View style={styles.column}>
          <View style={styles.row}>
            {data &&
              data.allInventoryItems
                .filter((_, i) => i % 2 === 0)
                .map(item => (
                  <ItemCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    imageURL={item.imageURL}
                    price={item.price}
                  />
                ))}
          </View>
          <View style={styles.row}>
            {data &&
              data.allInventoryItems
                .filter((_, i) => i % 2 !== 0)
                .map(item => (
                  <ItemCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    imageURL={item.imageURL}
                    price={item.price}
                  />
                ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    overflow: 'scroll',
  },
  column: {
    paddingTop: 16,
    flexDirection: 'row',
    marginLeft: 16,
  },
  row: {
    flex: 1,
    marginRight: 16,
  },
  list: {
    flexDirection: 'column',
    flex: 1,
  },
});
