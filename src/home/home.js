import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ServiceCard from '../components/Cards/serviceCard';
import ImageWrapper from '../components/ImageWrapper/imageWrapper';
import { serviceCardData } from '../Data/serviceCardData';
import { welcomeScreenData } from '../Data/welcomeScreenData'

const home = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.welcomText}>Welcome</Text>
            <View style={styles.topBar}>
                {welcomeScreenData.map((item)=>(
                    <ImageWrapper item={item.image} name={item.name}/>
                ))}
            </View>
            <View style={styles.componentWrap}> 
                <FlatList
                    data={serviceCardData}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 2 }}
                    numColumns={2}
                    renderItem={({ item }) => (
                       <TouchableOpacity onPress={()=>item.name =='Technology' && navigation.navigate('tech')}>
                        <ServiceCard name={item.name} description={item.description}image={item.image} />
                        </TouchableOpacity>
                    )} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent:'center'
    },
    welcomText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000'
    },
    topBar: {
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    iconWrap: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: 'grey'
    },
    topBarComponent:{
        alignItems:'center',
    },
})

export default home