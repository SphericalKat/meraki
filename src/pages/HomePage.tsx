import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ItemCard from '../components/ItemCard';

interface HomePageProps {}

interface Item {
  id: string;
  name: string;
  imageURL: string;
  price: string;
}

const HomePage = (_props: HomePageProps) => {
  const [items, setItems] = React.useState<Item[]>([
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f0',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://images.boardriders.com/global/rvca-products/all/default/hi-res/b3506tdl_rvca,wg_blt_sd1.jpg',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f1',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/a/m/american-eagle-wea0155272100_1_655d0c36.jpg?rnd=20200526195200',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f2',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzNbceOBM3YbvPFfhLkLq1SKlrbZGL0PMYQ&usqp=CAU',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f3',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://images.boardriders.com/global/rvca-products/all/default/hi-res/b3506tdl_rvca,wg_blt_sd1.jpg',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f4',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/a/m/american-eagle-wea0155272100_1_655d0c36.jpg?rnd=20200526195200',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f5',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzNbceOBM3YbvPFfhLkLq1SKlrbZGL0PMYQ&usqp=CAU',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f6',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://images.boardriders.com/global/rvca-products/all/default/hi-res/b3506tdl_rvca,wg_blt_sd1.jpg',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f7',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/a/m/american-eagle-wea0155272100_1_655d0c36.jpg?rnd=20200526195200',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f8',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzNbceOBM3YbvPFfhLkLq1SKlrbZGL0PMYQ&usqp=CAU',
      price: '$104.95',
    },
    {
      id: 'a29b1ed8-de00-4206-b943-bfa3da4fd8f9',
      name: 'Aelfric Eden Vintage shirt',
      imageURL:
        'https://images.boardriders.com/global/rvca-products/all/default/hi-res/b3506tdl_rvca,wg_blt_sd1.jpg',
      price: '$104.95',
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView removeClippedSubviews={true}>
        <View style={styles.column}>
          <View style={styles.row}>
            {items
              .filter((_, i) => i % 2 === 0)
              .map(item => (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  imageURL={item.imageURL}
                  price={item.price}
                />
              ))}
          </View>
          <View style={styles.row}>
            {items
              .filter((_, i) => i % 2 !== 0)
              .map(item => (
                <ItemCard
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
