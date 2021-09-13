import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

    const renderItem = (itemData) => {
        return (
            <CategoryGridTile itemData={itemData} onSelect={() => {
                navigation.navigate('Meals', {
                    categoryId: itemData.item.id,
                    categoryName: itemData.item.title
                })
            }} />
        )
    }

    return (
        <FlatList  data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

export default CategoriesScreen

