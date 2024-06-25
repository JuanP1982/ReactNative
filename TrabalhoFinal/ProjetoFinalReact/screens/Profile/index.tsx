import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    loadUserName();
  }, []);

  const loadUserName = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const { name } = JSON.parse(userData);
        setUserName(name);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.userName}>{userName}</Text>
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









    