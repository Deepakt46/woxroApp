import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
const width = Dimensions.get('screen').width - 50;
const height = Dimensions.get('screen').height;
const ServiceCard = ({ name, description, image }) => {
    return (
        <View style={styles.containerBox}>
            <View>
                <Image source={image} style={styles.imageStyle}/>
            </View>
            <View style={styles.contentWrap}>
                <Text style={styles.hederText}>{name}</Text>
                <Text style={styles.descriptionText} numberOfLines={2}>{description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerBox: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#CECECE',
        width: width / 2,
        height: height/4,
    },
    contentWrap: {
        padding:5
    },
    hederText:{
        color:'#000',
        fontWeight:'600',
        fontSize: 22
    },
    imageStyle:{
        width: width/ 2,
        height: height/7.2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    descriptionText:{
        color:'#8C8C8C',
        fontSize: 16,
        marginTop:3
    }
})
export default ServiceCard