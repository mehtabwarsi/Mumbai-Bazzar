//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../Screens/Tab_Navigators/Home';
import ProductShow from '../Screens/Stack_Screens/productShow';
import TabNaviagtion from './Tab_Naviagtion';
const Stack = createNativeStackNavigator();

// create a component
const StackNaviagtion = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeScreen"
        component={TabNaviagtion}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Product" component={ProductShow} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNaviagtion;
