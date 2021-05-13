import {gql, useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/core';
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Loading from '../components/Loading';
import {Item} from '../types';

interface ItemPageProps {}
interface ItemQueryVars {
  id: string;
}
interface ItemQueryResponse {
  InventoryItem: Item;
}
interface ItemPageParams {
  id: string | undefined;
}

const ItemPage = (_props: ItemPageProps) => {
  const route: any = useRoute();
  const {id, aspectRatio} = route.params!;

  const ITEM_QUERY = gql`
    query Item($id: ID!) {
      InventoryItem(id: $id) {
        id
        name
        price
        imageURL
        description
      }
    }
  `;
  const {loading, error, data} = useQuery<ItemQueryResponse, ItemQueryVars>(
    ITEM_QUERY,
    {
      variables: {id},
      pollInterval: 500,
    },
  );

  if (loading || error) {
    return <Loading />;
  }

  const {InventoryItem: item} = data!;

  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, {aspectRatio}]}
        source={{uri: `${item.imageURL}`}}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
};

export default ItemPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'scroll',
    paddingHorizontal: 24,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  name: {
    marginTop: 16,
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 24,
  },
  desc: {
    marginTop: 16,
    fontFamily: 'Metropolis-Regular',
  },
});
