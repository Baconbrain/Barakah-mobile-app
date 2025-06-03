import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Button, // <-- added import for Button
} from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/myprofile.jpg')} // my image
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Profile</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"  // placeholder text color (gray)
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"  // placeholder text color (gray)
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your Phone number"
            placeholderTextColor="#888"  // placeholder text color (gray)
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Button added here with pink text color */}
          <Button title="Enter" onPress={() => {}} color="0000" /> 
          {/* Button text color is  (#0000) */}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: 20,
    backgroundColor: 'rgba(230, 225, 225, 0.85)',  
    // light grayish-white with 85% opacity as container background
    margin: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',  // black text color for the title
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa', // light gray border for input boxes
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(230, 225, 225, 0.85)', 
    // input background: light grayish-white with 85% opacity
  },
});
