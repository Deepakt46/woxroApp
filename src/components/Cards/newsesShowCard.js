import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const newsesShowCard = ({item, description}) => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.textContent}><Text style={styles.text}>{description}</Text></View>
        <View style={styles.imageContent}>
            <Image source={item} style={styles.imageStyle}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    wrapper:{
        borderRadius: 10,
        flexDirection:'row',
        borderWidth: 1,
        borderColor:'#CECECE',
        marginVertical: 10,
        justifyContent:'space-between'
    },
    textContent:{
        flex: 0.8,
        paddingVertical: 5,
        paddingLeft: 8
    },
    imageContent:{
        flex:0.3,
    },
    imageStyle:{
        height: 70,
        width: 90,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        alignSelf:'flex-end'
    },
    text:{
        color:'#000'
    }
})
export default newsesShowCard