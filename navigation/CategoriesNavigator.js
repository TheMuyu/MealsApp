import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailScreen from './../screens/MealDetailScreen'
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Categories" component={CategoriesScreen}
          options={{ title: 'Categories' }} />
        <Stack.Screen name="Meals" component={CategoryMealsScreen}
          options={({ route }) => ({ title: route.params.categoryName })} />
        <Stack.Screen name="Meal Details" component={MealDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function CategoriesNavigator() {
  return (
    <MyStack />
  );
}