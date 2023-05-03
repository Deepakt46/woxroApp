import { NavigationContainer } from '@react-navigation/native'
import RootNav from './src/route'
import React from 'react'

const App = () => {
  return (
    <NavigationContainer>
      <RootNav/>
    </NavigationContainer>
  )
}

export default App