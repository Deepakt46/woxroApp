import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../welcomeScreen'
import TechnologyScreen from './technologyScreen'
import Home from './home'

const index = () => {
const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='tech' component={TechnologyScreen}></Stack.Screen>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default index