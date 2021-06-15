import React, { useState, useEffect } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/navigation/AppNavigator";
import TabNavigator from './src/navigation/TabNavigator';
import LoadingScreen from './src/screens/LoadingScreen';
import {Provider} from 'outstated'
import NoteStore from './src/outstate/NoteStore';
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Quicksand: require("./src/fonts/Quicksand-Regular.ttf"),
      QuicksandLight: require("./src/fonts/Quicksand-Light.ttf"),
      QuicksandSemiBold: require("./src/fonts/Quicksand-SemiBold.ttf"),
      QuicksandBold: require("./src/fonts/Quicksand-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <Provider stores={[NoteStore]}>
      <NavigationContainer>
       <TabNavigator />
      </NavigationContainer>
      </Provider>
    );
  } else {
    return null;
  }
}

