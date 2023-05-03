import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import calls from './calls';
import locations from './locations';
import home from './home';
import messages from './messages';;
import React from 'react';
import HomeStack from './homeStack'

const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='home' backBehavior='initialRoute' screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarStyle: {
                borderTopWidth: 1,
                borderTopColor: 'grey',
            },
        }}>
            <Tab.Screen name='home' component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../assets/home.png')} style={focused ? styles.iconFocused : styles.iconInactive} />
                )
            }} />
            <Tab.Screen name='call' component={calls} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../assets/telephone.png')} style={focused ? styles.iconFocused : styles.iconInactive} />
                )
            }} />
            <Tab.Screen name='message' component={messages} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../assets/email.png')} style={focused ? styles.iconFocused : styles.iconInactive} />
                )
            }} />
            <Tab.Screen name='location' component={locations} options={{
                tabBarIcon: ({ focused }) => (
                    <Image source={require('../assets/location.png')} style={focused ? styles.iconFocused : styles.iconInactive} />
                )
            }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    iconFocused: {
        width: 30,
        height: 30,
        tintColor: 'blue'
    },
    iconInactive: {
        width: 30,
        height: 30,
        tintColor: 'gray'
    }
})

export default Home