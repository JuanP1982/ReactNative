import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Home from '../screens/Home'
import Ajuda from '../screens/Apoie'
import Contato from '../screens/Contato'
import Sobre from '../screens/Sobre'
import Apoie from '../screens/Apoie'

export default function Routes() {
  const Tab = createBottomTabNavigator()
  
    return (
        <Tab.Navigator >
            <Tab.Screen name='Home' component={Home} options={
            {
            tabBarActiveTintColor:'green',
            tabBarIcon:(({size,color}) => {
                return <Feather name="home" color={color} size={size}/>
            })
            }
                }/>
            <Tab.Screen name='Apoie-nos' component={Apoie} options={
            {
            tabBarActiveTintColor:'green',
            tabBarIcon:(({size,color}) => {
                return <Feather name="dollar-sign" color={color} size={size}/>
            })
            }
                } />
            <Tab.Screen name='Contato' component={Contato} options={
            {
            tabBarActiveTintColor:'green',
            tabBarIcon:(({size,color}) => {
                return <Feather name="phone" color={color} size={size}/>
            })
            }
        }   />
            <Tab.Screen name='Sobre' component={Sobre} options={
            {
            tabBarActiveTintColor:'green',
            tabBarIcon:(({size,color})=>{
                return <Feather name="file-text" color={color} size={size} />
            })
            }
                } />
        </Tab.Navigator>
  )
}