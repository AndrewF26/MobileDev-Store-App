import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AppContext } from '../App';
import GradientWrapper from '../components/GradientWrapper';

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handlePlaceOrder = () => {
    dispatch({ type: 'PLACE_ORDER' });
    alert('Order has been placed successfully!');
  };

  return (
    <GradientWrapper style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <Text>Total Price: ${state.cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</Text>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <Text style={styles.label}>Select Payment Method:</Text>
      <View style={styles.radioGroup}>
        <RadioButton
          value="creditCard"
          status={paymentMethod === 'creditCard' ? 'checked' : 'unchecked'}
          onPress={() => setPaymentMethod('creditCard')}
        />
        <Text onPress={() => setPaymentMethod('creditCard')}>Credit Card</Text>
      </View>
      <View style={styles.radioGroup}>
        <RadioButton
          value="paypal"
          status={paymentMethod === 'paypal' ? 'checked' : 'unchecked'}
          onPress={() => setPaymentMethod('paypal')}
        />
        <Text onPress={() => setPaymentMethod('paypal')}>PayPal</Text>
      </View>
      <Button
        title="Place Order"
        onPress={handlePlaceOrder}
        color="green"
      />
    </ScrollView>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Checkout;