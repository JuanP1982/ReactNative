import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/Profile/Login';
import Register from '../screens/Profile/Register';
import Profile from '../screens/Profile/index';
import Home from '../screens/Home';
import Routes from '../routes';
import StackRoutes from '../routes/StackRoutes';

const Stack = createStackNavigator();

const AuthNavigator = ({ onAuthentication }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  useEffect(() => {
    checkUserRegistration();
  }, []);

  const checkUserRegistration = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setIsUserRegistered(true);
      }
    } catch (error) {
      console.error('Error checking user registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.email === email && userData.password === password) {
          onAuthentication(true);
        } else {
          alert('Login inválido');
        }
      } else {
        alert('Usuário não encontrado. Por favor, registre-se.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Erro durante o login. Tente novamente mais tarde.');
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const userData = { name, email, password };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      setIsUserRegistered(true);
      onAuthentication(true);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Erro durante o registro. Tente novamente mais tarde.');
    }
  };

  if (isLoading) {
    return null; // ou um indicador de carregamento se necessário
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isUserRegistered ? 'Profile' : 'Login'}>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} onLogin={handleLogin} onNavigateToRegister={() => props.navigation.navigate('Register')} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => <Register {...props} onRegister={handleRegister} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Routes" component={StackRoutes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;













