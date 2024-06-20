import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from '../firebase/firebase';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        addUserToDatabase(user.uid, email);
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
  }

  const addUserToDatabase = (userId, email) => {
    firebase.database().ref('users/' + userId).set({
      email: email
    })
    .then(() => console.log("Data set successfully."))
    .catch(error => console.error("Firebase Database Error: ", error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: 'black',  
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    top: 180,
  },
  signUpButtonText: {
    color: 'white',  
    fontSize: 16,
  }
});

export default RegisterScreen;