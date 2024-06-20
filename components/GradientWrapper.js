import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const GradientWrapper = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['white', '#bdc3c7', '#f4791f']} 
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
  },
});

export default GradientWrapper;