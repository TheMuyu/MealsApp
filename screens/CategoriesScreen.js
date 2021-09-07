import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Button
                title="Go to Category Meals"
                onPress={() => navigation.navigate('Category Meals')}
            />
            <Text>React Native App with Expo CLI</Text>
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
