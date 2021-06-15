//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const AddReminderList = ({ list, onPress }) => {

  const completedCount = list.reminders.filter(reminder => reminder.completed).length;
  const remainingCount = list.reminders.length - completedCount;
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subTitle}>Remaining</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subTitle}>Completed</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontFamily: "QuicksandSemiBold",
  },
  count:{
      fontSize:48,
      fontFamily:'QuicksandLight',
      color: '#fff',
  },
  subTitle:{
      fontSize:12,
      fontFamily:'QuicksandBold',
      color: '#fff',
  }
});

//make this component available to the app
export default AddReminderList;
