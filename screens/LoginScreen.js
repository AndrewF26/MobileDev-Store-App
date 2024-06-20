import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../firebase/firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.navigate('Home'); 
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
  }

  const handleForgotPassword = () => {
    if (email.trim()) {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Please check your email to reset your password!');
        })
        .catch(error => {
          console.error('Reset Password Error', error);
          alert(error.message);
        });
    } else {
      alert('Please enter your email address to reset your password.');
    }
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
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>Forgot password?</Text>
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
  loginButton: {
    backgroundColor: 'black', 
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    top: 190,
  },
  loginButtonText: {
    color: 'white', 
    fontSize: 16,
  },
  forgotButtonText: {
    color: 'blue',
  },
  forgotButton: {
    bottom: 40,
  }
});

export default LoginScreen;