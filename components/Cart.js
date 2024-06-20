import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { AppContext } from '../App';
import GradientWrapper from '../components/GradientWrapper';

const Cart = () => {
  const store = useContext(AppContext);
  const navigation = useNavigation();
  const cart = store.state.cart;
  const reducer = (acc, currentItem) => {
    return acc + currentItem.price;
  };

  const totalPrice = cart.reduce(reducer, 0);

  return (
    <GradientWrapper style={styles.cartComponent}>
    <View style={styles.cartContainer}>
      {cart && cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          {cart.map((p) => (
            <View style={styles.product}>
              <View style={styles.left}>
                <Image
                  source={{ uri: p.img }}
                  style={{ width: '105%', height: '100%', borderRadius: 10 }}
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.name}>{p.name}</Text>
                <Text style={styles.price}> ${p.price}</Text>
                <Pressable
                  onPress={() => {
                    store.dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: {
                        pid: p.id,
                      },
                    });
                  }}>
                  <Text style={styles.removeButton}>Remove</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      <View style={styles.priceContainer}>
        <Text style={styles.totalPrice}>Total Price ${totalPrice}</Text>
        <Pressable
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.checkoutBtn}>Proceed to Checkout</Text>
        </Pressable>
      </View>
    </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
    flex: 1,
  },
  product: {
    borderColor: '#3b3b3b',
    shadowColor: '#3b3b3b',
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
    height: 150,  
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  left: {
    flex: 4,
    borderRadius: 10,
    padding: 2,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  right: {
    flex: 6,
    padding: 10,
    borderRadius: 10,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  name: {
    fontSize: 20,
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#30502f',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  removeButton: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 7,
    borderRadius: 5,
    width: '50%',
  },
  emptyCart: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    flex: 1,
    color: 'gray',
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutBtn: {
    backgroundColor: 'white',
    color: 'green',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
