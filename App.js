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
import WidgetDemoPage from "./WidgetDemoPage"

function HomeScreen(){
    return (
        <>
            <View style={homePageStyle.btnContainer}>
                <Button
                    onPress={ ()=> {
                        navigation.navigate("WidgetDemoPage");
                    }}
                    title={"Widget Demo"}
                    style={homePageStyle.btn}/>
            </View>

        </>
    );
}

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();

const App: () => React$Node = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name={"Home"} component={HomeScreen} />
            <Stack.Screen  name={"WidgetDemoPage"} component={WidgetDemoPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const homePageStyle = StyleSheet.create({
    btn:{
    },
    btnContainer:{
        marginTop:8,
        paddingHorizontal:8,
        marginHorizontal:8
    }
})

export default App;
