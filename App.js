/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Button,
    Alert,
    Image
} from 'react-native';
import WidgetDemoPage from "./ui/WidgetDemoPage/WidgetDemoPage";
import HomePage from "./ui/HomePage/HomePage"


import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();

const App: () => React$Node = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name={"Home"} component={HomePage} />
            <Stack.Screen  name={"WidgetDemoPage"} component={WidgetDemoPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
