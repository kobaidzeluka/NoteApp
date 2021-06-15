//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import NoteList from "./../components/NoteList";
import { useStore } from "outstated";
import NoteStore from "./../outstate/NoteStore";
import { useState } from "react";
// create a component
const HomeScreen = ({ navigation }) => {
  // const [show, setShow] = useState(false)

  const { notes, showInput, setShowInput, searchNote, setSearchNote } =
    useStore(NoteStore);

    const filteredNote = searchNote
    ? notes.filter((x) =>
        x.title.toLowerCase().includes(searchNote.toLowerCase())
      )
    : notes;


  return (
    <SafeAreaView style={{ backgroundColor: "#252525", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
        <TouchableOpacity
          onPress={() => {
            setShowInput(!showInput);
          }}
        >
          <View style={styles.box}>
            <AntDesign name="search1" size={26} color="#f8f8f8" />
          </View>
        </TouchableOpacity>
      </View>
      {showInput ? (
        <View value={showInput} style={styles.input}>
          <TextInput
            value={searchNote}
            onChangeText={setSearchNote}
            placeholderTextColor="#3b3b3b"
            style={styles.titleInput}
            placeholder="Search"
          />
        </View>
      ) : null}
      <View style={styles.flatlistBox}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredNote}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteList
              list={item}
              title={item.title}
              date={item.date}
              onPress={() => navigation.navigate("NoteDetails", item)}
            />
          )}
        />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
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
  input: {
    marginHorizontal: 30,
  },
  titleInput: {
    color: "#f8f8f8",
    // marginHorizontal: 30,
    // marginTop: 30,
    fontSize: 30,
    fontFamily: "QuicksandBold",
  },
  flatlistBox: {
    marginHorizontal: 30,
    marginTop: 20,
  },

  addButton: {
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 100,
  },
});

//make this component available to the app
export default HomeScreen;
