//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

// create a component
const NoteList = ({title, date, list, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, {backgroundColor:list.color}]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderRadius:10,
        width:'44%',
        marginLeft:15,
        marginBottom:15,
    },
    title:{
        fontSize:20,
        fontFamily:'Quicksand',
        padding: 15,
    },
    date:{
        fontFamily:'Quicksand',
        fontSize:18,
        color: '#9a6d5e',
        marginLeft:15,
        marginBottom:15,
    }
});

//make this component available to the app
export default NoteList;
