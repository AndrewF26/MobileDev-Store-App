import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { AppContext } from '../App';
import GradientWrapper from '../components/GradientWrapper';

const Orders = () => {
  const store = useContext(AppContext);
  const orders = store.state.orders;

  const handleCancelOrder = (orderId) => {
    store.dispatch({
      type: 'CANCEL_ORDER',
      payload: { orderId }
    });
  };
  
  return (
    <View style={styles.orderComponent}>
    <GradientWrapper style={styles.orderComponent}>
      <ScrollView style={styles.scrollView}>
        {orders.map((order, index) => (
          <View key={index} style={styles.order}>
            {order.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.orderItem}>
                <View style={styles.left}>
                  <Image
                    source={{ uri: item.img }}
                    style={{ width: '105%', height: '100%', borderRadius: 10 }}
                  />
                </View>
                <View style={styles.right}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                      <Text style={{ color: 'green' }}>Ordered</Text>
                  </View>
              </View>
            ))}
            <Button
              title="Cancel Order"
              onPress={() => handleCancelOrder(order.id)}
              color="red"
            />
          </View>
        ))}
      </ScrollView>
      </GradientWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  orderComponent: {
    flex: 1,
  },
  order: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
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
  orderItem: {
    height: 150,  
    overflow: 'hidden',
    flexDirection: 'row',
    borderBottomWidth: 1,
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
});

export default Orders;
