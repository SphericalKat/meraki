import {gql, useMutation, useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/core';
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button, Snackbar, useTheme} from 'react-native-paper';
import Loading from '../components/Loading';
import {Item} from '../types';

interface ItemPageProps {}
interface ItemQueryVars {
  id: string;
}
interface ItemQueryResponse {
  InventoryItem: Item;
}

interface CartMutVars {
  id: string;
  qty: number;
}

interface CartMutResponse {
  addToCart: boolean;
}

const ItemPage = (_props: ItemPageProps) => {
  const route: any = useRoute();
  const {id, aspectRatio} = route.params!;
  const [showSnack, setShowSnack] = React.useState('');
  const theme = useTheme();

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

  const CART_MUTATION = gql`
    mutation CartAdd($id: ID!, $qty: Int!) {
      addToCart(data: {inventoryItemId: $id, quantity: $qty})
    }
  `;
  const [addToCart, {data: mutationData, error: mutationError}] = useMutation<
    CartMutResponse,
    CartMutVars
  >(CART_MUTATION, {
    variables: {id, qty: 1},
  });

  React.useEffect(() => {
    if (mutationData?.addToCart) {
      setShowSnack('Added item to cart');
    }

    if (mutationError) {
      setShowSnack('Error adding item to cart');
    }
  }, [mutationData, mutationError]);

  if (loading || error) {
    return <Loading />;
  }

  const {InventoryItem: item} = data!;

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={[styles.image, {aspectRatio}]}
          source={{uri: `${item.imageURL}`}}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            addToCart();
          }}>
          Add to cart
        </Button>
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

export default ItemPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'scroll',
    paddingHorizontal: 24,
  },
  image: {
    width: '100%',
    borderRadius: 24,
  },
  name: {
    marginTop: 16,
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 24,
  },
  desc: {
    marginTop: 8,
    fontFamily: 'Metropolis-Regular',
  },
  button: {
    marginTop: 64,
    paddingVertical: 8,
  },
});
