import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import AccountScreen from './src/screens/AccountScreen'
import ReviewScreen from './src/screens/ReviewScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const RootHome = () => {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#f2ed46',
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#1e1e1e' 
        }
      }}
    >
      <Tab.Screen
        name='Review'
        component={ReviewScreen}
        options={{
          tabBarLabel: 'Review',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chat" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={RootHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = "DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App