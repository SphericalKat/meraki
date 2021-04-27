import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface ItemCardProps {
  name: string;
  imageURL: string;
  price: string;
}

const ItemCard = ({name, imageURL, price}: ItemCardProps) => {
  const [size, setSize] = useState({height: 1, width: 1});

  useEffect(() => {
    Image.getSize(imageURL, (w, h) => {
      setSize({height: h, width: w});
    });
  }, [size, imageURL]);

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          {
            aspectRatio: size.width / size.height,
          },
        ]}
        source={{uri: `${imageURL}`}}
      />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.price} numberOfLines={1}>
        {price}
      </Text>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  image: {
    width: '100%',
    borderRadius: 24,
  },
  name: {
    marginTop: 16,
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
  },
  price: {
    marginTop: 4,
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
  },
});
