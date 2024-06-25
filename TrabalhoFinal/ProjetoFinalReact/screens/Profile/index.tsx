import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState('');
  const [UserEmail, setUserEmail] = useState("")

  React.useEffect(() => {
    loadUserName();
  }, []);

  const loadUserName = async () => {
    try {
      const userData = await AsyncStorage.getItem('Usuario');
      if (userData) {
        const { nome,email } = JSON.parse(userData);
        setUserName(nome);
        setUserEmail(email)
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('Usuario');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userName}>{UserEmail}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 30,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Profile;









    