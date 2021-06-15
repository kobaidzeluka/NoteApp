//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
// create a component

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
       navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Note App</Text>
      <LottieView
        loop
        autoPlay
        style={{ width: "80%" }}
        source={require("../assets/55363-hello.json")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
  title: {
    fontSize: 50,
    fontFamily: "QuicksandBold",
    color: "#f8f8f8",
  },
});

//make this component available to the app
export default LoadingScreen;
