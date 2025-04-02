import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace('Login');
  };

  return (
    <View>
      <Text>Welcome to EventEase!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
