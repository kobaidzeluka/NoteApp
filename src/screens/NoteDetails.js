//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NoteStore from './../outstate/NoteStore';
import {useStore} from 'outstated'
// create a component
const NoteDetails = ({route, navigation}) => {
  const { deleteNote } = useStore(NoteStore);
    const { title, date, body,id} = route.params;

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#252525'}}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.box}>
            <AntDesign name="left" size={26} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{deleteNote(id), navigation.goBack()}}>
          <View style={styles.box}>
            <AntDesign name="delete" size={26} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <AntDesign name="edit" size={26} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
      <Text style={styles.title}>
      {title}
      </Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.note}>{body}</Text>
      </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        marginHorizontal: 30,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      },
     
      box: {
        backgroundColor: "#3b3b3b",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 15,
      },
      body:{
          marginTop:20,
      },
      title:{
          fontSize:30,
          fontFamily:'QuicksandBold',
          color: '#f8f8f8',
          paddingHorizontal:30,
      },
      date:{
          padding:30,
          color:'#757575',
          fontSize:18,
          fontFamily:'QuicksandSemiBold'
      },
      note:{
          fontSize:18,
          color: '#f8f8f8',
          paddingHorizontal:30,
          fontSize:25,
          fontFamily:'QuicksandSemiBold'
      }
});

//make this component available to the app
export default NoteDetails;
