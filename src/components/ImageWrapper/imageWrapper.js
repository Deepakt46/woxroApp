import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'

const ImageWrapper = ({ item, name }) => (
    <View style={styles.topBarComponent}>
        <View style={styles.iconWrap}>
            <Image source={item} style={styles.icon} />
        </View>
        <Text style={styles.textStyle}>{name}</Text>
    </View>
)
const styles = StyleSheet.create({
    topBarComponent:{
        alignItems:'center',
    },
    iconWrap: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        // tintColor: 'grey'
    },
    textStyle:{
        color: '#000',
        marginTop: 8,
    },
})
export default ImageWrapper