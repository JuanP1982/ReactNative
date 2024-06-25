import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MoviePage from '../screens/MoviePage';
import Routes from '.';

export default function StackRoutes({}) {
  const Stack = createNativeStackNavigator();
    return (

    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Rotas' component={Routes}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name='MoviePage' component={MoviePage}></Stack.Screen>
    </Stack.Navigator>

  )
}