//import liraries
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen';
import NoteDetails from './../screens/NoteDetails';
import LoadingScreen from '../screens/LoadingScreen';
import CreateScreen from './../screens/CreateNote';
// create a component

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NoteDetails" component={NoteDetails} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    );
};



//make this component available to the app
export default AppNavigator;
