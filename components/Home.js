import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native';
import { products } from '../constants';
import GradientWrapper from '../components/GradientWrapper';

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeComponent}>
    <GradientWrapper style={styles.homeComponent}>
      <ScrollView style={styles.scrollView}>
        {products.map((p) => (
          <Pressable
            style={styles.product}
            android_ripple={{ color: '#faeba9' }}
            onPress={() => {
              navigation.navigate('Product Information', p);
            }}>
            <View style={styles.left}>
              <Image
                source={{ uri: p.img }}
                style={{ width: '105%', height: '100%', borderRadius: 10 }}
              />
            </View>
            <View style={styles.right}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.price}>${p.price}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      </GradientWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    //backgroundColor:'gray'
  },
  product: {
    borderColor: '#3b3b3b',
    shadowColor: '#3b3b3b',
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 10,
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  left: {
    flex: 4,
    borderRadius: 10,
    padding: 10,
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
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    marginTop: 10,
    color: '#30502f',
    fontWeight: 'bold',
  },
});

export default Home;
