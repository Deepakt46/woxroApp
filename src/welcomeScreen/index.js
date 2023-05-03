import { View, StyleSheet, Image, Dimensions, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('screen');
const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View>
                <Image source={require('../assets/welcome.jpg')} style={styles.welcomeImage} />
            </View>
            <View style={styles.contentTextWrap}>
                <Text style={styles.headerText}>Welcome</Text>
                <Text style={styles.contentText}>To India's trusteted global website developement company that provides full-cycle software development services, e-commerce & Mobile App development</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('home')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.copyright}>2020 Woxro Technology Solutions Pvt Ltd</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    welcomeImage: {
        height: height / 3,
        width: width - 40,
        resizeMode: 'contain',
    },
    contentTextWrap: {
        alignItems: 'center',
        paddingBottom: 20
    },
    headerText: {
        fontSize: 50,
        color: '#000',
        fontWeight: 'bold'
    },
    contentText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 20
    },
    buttonStyle: {
        borderWidth: 1.4,
        borderColor: '#000',
        paddingVertical: 7,
        alignItems:'center',
        width: width - 80,
        alignSelf:'center',
    },
    buttonText:{
        color:'#000',
        fontSize: 16,
        fontWeight:'500'
    },
    copyright:{
        color:'#000',
        textAlign:'center'
    }
})

export default WelcomeScreen