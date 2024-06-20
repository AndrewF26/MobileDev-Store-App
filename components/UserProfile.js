import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from '../firebase/firebase';
import { AppContext } from '../App';
import GradientWrapper from '../components/GradientWrapper';

const UserProfile = ({ navigation }) => {
  const { state } = useContext(AppContext);
  const user = firebase.auth().currentUser;

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.replace('Login'); 
    }).catch(error => {
      console.error('Sign Out Error', error);
    });
  };

  return (
    <GradientWrapper style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text>Email: {user ? user.email : 'No user info'}</Text>
      <Button title="Sign Out" onPress={handleSignOut} color="red" />
    </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  }
});

export default UserProfile;