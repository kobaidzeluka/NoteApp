//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useStore } from "outstated";
import NoteStore from "./../outstate/NoteStore";
import NoteColors from "../config/NoteColors";
// create a component
const CreateScreen = ({ navigation }) => {
  const { notes, addNote, color, setColor, setTitle, title } =
    useStore(NoteStore);

  const renderColors = () => {
    return NoteColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={{
            backgroundColor: color,
            width: 50,
            height: 50,
            borderRadius: 5,
          }}
          onPress={() => setColor(color)}
        />
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#252525" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.box}>
            <AntDesign name="left" size={25} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.box}>
            <AntDesign name="delete" size={25} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNote(), navigation.goBack();
          }}
        >
          <View style={styles.box}>
            <Text style={[styles.saveButton, { color: color }]}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text
          style={{
            color: "#f8f8f8",
            marginVertical: 20,
            fontFamily: "QuicksandBold",
            fontSize: 25,
          }}
        >
          Choose a color
        </Text>
      </View>
      <View style={styles.colorSelect}>{renderColors()}</View>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholderTextColor="#3b3b3b"
        style={styles.titleInput}
        placeholder="Title"
      />
      <TextInput
        placeholderTextColor="#3b3b3b"
        style={styles.bodyInput}
        placeholder="Type something..."
      />
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
  title: {
    fontSize: 40,
    fontFamily: "QuicksandBold",
    color: "#f8f8f8",
  },
  box: {
    backgroundColor: "#3b3b3b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
  },
  saveButton: {
    fontSize: 18,
    color: "#f8f8f8",
    fontFamily: "QuicksandBold",
  },
  titleInput: {
    color: "#f8f8f8",
    marginHorizontal: 30,
    marginTop: 30,
    fontSize: 40,
    fontFamily: "QuicksandSemiBold",
  },
  bodyInput: {
    marginTop: 30,
    marginHorizontal: 30,
    color: "#f8f8f8",
    fontSize: 25,
    fontFamily: "QuicksandSemiBold",
  },
  colorSelect: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

//make this component available to the app
export default CreateScreen;
