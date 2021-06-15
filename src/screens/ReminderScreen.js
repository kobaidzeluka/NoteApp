//import liraries
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import AddReminder from "../components/AddReminder";
import { useStore } from "outstated";
import NoteStore from "./../outstate/NoteStore";
import ReminderData from "../config/ReminderData";
import AddReminderList from "../components/AddReminderList";
// create a component
const ReminderScreen = () => {
  const { modalVisible, setModalVisible, reminders } = useStore(NoteStore);
  return (
    <SafeAreaView style={{ backgroundColor: "#252525", flex: 1 }}>
      <Modal visible={modalVisible} animationType="slide">
        <AddReminder />
      </Modal>
      <View style={styles.header}>
        <Text style={styles.title}>Reminder</Text>
        <TouchableOpacity>
          <View style={styles.box}>
            <Entypo name="notification" color="#f8f8f8" size={26} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{height:275, paddingLeft:30}}>
      <FlatList  
      data={reminders} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name }
      renderItem={({item}) => <AddReminderList list={item} /> }
       />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <AntDesign name="plus" size={45} color="#f8f8f8" />
        </TouchableOpacity>
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
    marginBottom:50,
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
  addButton: {
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: "#3b3b3b",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 100,
  },
});

//make this component available to the app
export default ReminderScreen;
