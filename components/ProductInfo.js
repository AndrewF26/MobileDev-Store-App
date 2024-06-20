import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { AppContext } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientWrapper from '../components/GradientWrapper';

const ProductInfo = ({ route }) => {
  const store = useContext(AppContext);
  const product = route.params;
  console.log(store.state);
  const isAddedToCart =
    store?.state?.cart.filter((item) => item.id === route?.params?.id).length >
    0;

  if (!product) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorMessage}>No product information is available. Please select a product.</Text>
      </View>
    );
  }

  return (
    <GradientWrapper style={styles.productInfo}>
    <ScrollView style={styles.productInfo}>
      <Card containerStyle={{ height: 340, margin: 0 }}>
        <Card.Title style={{ fontSize: 16 }}>{product.name}</Card.Title>
        <Card.Divider />
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: product.img }}
          />
        </View>
        <Text style={styles.price}>${product.price}</Text>
      </Card>
      <Pressable
        onPress={() => {
          store.dispatch({
            type: 'ADD_TO_CART',
            payload: product,
          });
        }}>
        <Text
          style={isAddedToCart ? styles.addedToCartBtn : styles.addToCartBtn}>
          {isAddedToCart ? 'Added' : 'Add to cart'}{' '}
          <Icon name={isAddedToCart ? 'check' : 'shopping-cart'} size={30} />
        </Text>
      </Pressable>
      <View style={styles.aboutContainer}>
        <Text style={styles.infoheader}>About this product</Text>
        <Text style={styles.infoText}>
          {product.description}
        </Text>
      </View>  
    </ScrollView>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  productInfo: {
    flex: 1,
    padding: 15,
  },
  image: {
    height: '100%',
    widht: '100%',
  },
  imgContainer: {
    height: 220,
  },
  addToCartBtn: {
    backgroundColor: '#f7b92b',
    padding: 10,
    color: 'black',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  addedToCartBtn: {
    backgroundColor: 'green',
    padding: 10,
    color: 'white',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  infoheader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 10,
  },
  aboutContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#30502f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default ProductInfo;
