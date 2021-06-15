//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useStore } from "outstated";
import NoteStore from "./../outstate/NoteStore";
import ReminderData from "../config/ReminderData";
import NoteColors from "../config/NoteColors";
// create a component
const AddReminder = ({ onPress }) => {
  const { modalVisible, setModalVisible, color, setColor, setReminderTitle, remindertitle, addReminder } = useStore(NoteStore);

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
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.box}>
            <AntDesign name="close" size={25} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          addReminder()
        }}>
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
        value={remindertitle}
        onChangeText={(text) => setReminderTitle(text)}
        placeholderTextColor="#3b3b3b"
        style={styles.titleInput}
        placeholder="Title"
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
  colorSelect: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleInput: {
    color: "#f8f8f8",
    marginHorizontal: 30,
    marginTop: 30,
    fontSize: 40,
    fontFamily: "QuicksandSemiBold",
  },
});

//make this component available to the app
export default AddReminder;
