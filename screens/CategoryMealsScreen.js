import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = ({navigation, route}) => {
    const {categoryId} = route.params;
    console.log(categoryId);
    const selectedCategory = CATEGORIES.find(x => x.id === categoryId);
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button style={{marginBottom: 15}}
                title="Go to Meal Details"
                onPress={() => navigation.navigate('Meal Details')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
