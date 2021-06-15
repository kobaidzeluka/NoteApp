import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";
import AppNavigator from "./AppNavigator";
import ReminderScreen from './../screens/ReminderScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        height: 100,
        borderTopColor: "#252525",
        elevation: 0,
        backgroundColor:'#252525'
      },
      activeTintColor: "#ec7430",
      inactiveTintColor: "#ccc",
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="documents" color={color} size={size} />
        ),
      }}
      name="Feed"
      component={AppNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="notification" color={color} size={size} />
        ),
      }}
      name="Reminder"
      component={ReminderScreen}
    />
    
  </Tab.Navigator>
);

export default TabNavigator;