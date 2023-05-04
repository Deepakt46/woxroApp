import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ServiceCard from '../components/Cards/serviceCard';
import ImageWrapper from '../components/ImageWrapper/imageWrapper';
import { welcomeScreenData, serviceCardData } from '../Data/Data'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomText}>Welcome</Text>
            <View style={styles.topBar}>
                {welcomeScreenData.map((item)=>(
                    <ImageWrapper item={item.image} name={item.name} style={{borderColor:'#D5D5D5'}}/>
                ))}
            </View>
            <View style={styles.componentWrap}> 
                <FlatList
                    data={serviceCardData}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 2 }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                       <TouchableOpacity onPress={()=>item.name =='Technology' && navigation.navigate('tech')}>
                        <ServiceCard name={item.name} description={item.description}image={item.image} />
                        </TouchableOpacity>
                    )} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    welcomText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000'
    },
    topBar: {
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    topBarComponent:{
        alignItems:'center',
    },
    componentWrap:{
        paddingTop: 15,
    }
})

export default Home