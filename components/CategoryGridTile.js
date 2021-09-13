import React from 'react'
import { StyleSheet, Text, View, Platform, TouchableNativeFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CategoryGridTile = ({ itemData, onSelect }) => {
    let TouchableOp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableOp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.container}>
            <TouchableOp style={{flex: 1}} onPress={onSelect}>
                <View style={{ ...styles.item, ...{ backgroundColor: itemData.item.color } }}>
                    <Text numberOfLines={2} style={styles.title}>{itemData.item.title}</Text>
                </View>
            </TouchableOp>
        </View>

    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        height: 150,
        width: 175,
        borderRadius: 10,
        overflow: 'hidden',
    },
    item: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})
