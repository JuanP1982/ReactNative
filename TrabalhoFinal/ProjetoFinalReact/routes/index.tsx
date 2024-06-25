import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Cart from "../screens/Card";

export default function Routes() {
  const Tabs = createBottomTabNavigator();

  return (
    
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />
        <Tabs.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="user" color={color} size={size} />;
            },
          }}
        />
      </Tabs.Navigator>
    
  );
}
