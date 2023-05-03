import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../welcomeScreen'
import Home from '../home'

const index = () => {
const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcome' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default index