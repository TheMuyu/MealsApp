import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

    const renderItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                navigation.navigate('Meals', {
                    categoryId: itemData.item.id,
                    categoryName: itemData.item.title
                })
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        width: 150,
        height: 150
    }
})
