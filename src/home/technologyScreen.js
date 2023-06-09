import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ImageWrapper from '../components/ImageWrapper/imageWrapper';
import NewsesShowCard from '../components/Cards/newsesShowCard';
import { FrameWorkData } from '../Data/Data';

const TechnologyScreen = ({ navigation }) => {
    useEffect(() => (
        setItem(FrameWorkData[0].list)

    ), [])
    const [selectedTab, setSelectedTab] = useState('React');
    const [item, setItem] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.welcomText}>Technology and blog</Text>
            <View style={styles.topBar}>
                {FrameWorkData.map((item) => (
                    <TouchableOpacity onPress={() => { setSelectedTab(item.name), setItem(item.list) }}>
                        <ImageWrapper item={item.image} name={item.name} style={{borderColor: '#E9E9E9',}} />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.description}>
                {FrameWorkData.map((item) => (
                    item.name === selectedTab &&
                    <Text style={styles.descriptionText} numberOfLines={2}>{item.description}</Text>
                ))}
            </View>
            <View style={{ paddingTop: 20 }}>
                <FlatList data={item}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <NewsesShowCard item={item.image} description={item.description} />
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
        paddingBottom: 50
    },
    welcomText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    topBar: {
        flexDirection: 'row',
        paddingVertical: 25,
        justifyContent: 'space-between',
    },
    description: {
        borderRadius: 30,
        borderColor: '#CECECE',
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    },
    descriptionText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 13,
        paddingHorizontal: 3
    }
})

export default TechnologyScreen