import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Image
        source={require('../../assets/barakah.jpg')} // My image
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
