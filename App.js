import React, { useReducer, useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from './firebase/firebase';

const Drawer = createDrawerNavigator();

import { SearchBar } from 'react-native-elements';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserProfile from './components/UserProfile';

export const AppContext = React.createContext();

import { reducer, initialState } from './store';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <StatusBar barStyle="light-content" backgroundColor="#3b3b3b" />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => setSearch(value)}
        value={search}
        onClear={() => setSearch('')}
        containerStyle={{
          backgroundColor: '#3b3b3b',
          borderRadius: 0,
          marginTop: 25,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          color: 'white',
        }}
      />
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName={isAuthenticated ? "Home" : "Login"}
            screenOptions={{ headerShown: true,
              headerTitle: "Andrew's Electronics", 
              drawerStyle: {
                backgroundColor: '#e1e1e1',
                width: 200,
              },
            }}>
            {isAuthenticated ? (
            // User is signed in, show the main app navigation
            <>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Profile" component={UserProfile} />
              <Drawer.Screen name="Product Information" component={ProductInfo} />
              <Drawer.Screen name="Cart" component={Cart} />
              <Drawer.Screen name="Checkout" component={Checkout} />
              <Drawer.Screen name="Orders" component={Orders} />
            </>
            ) : (
            // User is not signed in, show authentication screens
            <>
              <Drawer.Screen name="Login" component={LoginScreen} />
              <Drawer.Screen name="Sign Up" component={RegisterScreen} />
            </>
          )}
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
