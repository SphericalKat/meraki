import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ItemCardProps {
  id: string;
  name: string;
  imageURL: string;
  price: string;
}

const ItemCard = ({name, imageURL, price, id}: ItemCardProps) => {
  const [size, setSize] = useState({height: 1, width: 1});
  const theme = useTheme();

  useEffect(() => {
    let isMounted = true;
    Image.getSize(imageURL, (w, h) => {
      setSize({height: h, width: w});
    });
    return () => {
      isMounted = false;
    };
  }, [size, imageURL]);
  const navigation = useNavigation();
  const aspectRatio = size.width / size.height;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('itempage', {id, aspectRatio})}>
      <View style={styles.container}>
        <Image
          style={[
            styles.image,
            {
              aspectRatio,
            },
          ]}
          source={{uri: `${imageURL}`}}
        />
        <Text
          style={[styles.name, {color: theme.colors.primary}]}
          numberOfLines={1}>
          {name}
        </Text>
        <Text
          style={[styles.price, {color: theme.colors.primary}]}
          numberOfLines={1}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
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
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 18,
  },
  price: {
    marginTop: 4,
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 18,
  },
});
