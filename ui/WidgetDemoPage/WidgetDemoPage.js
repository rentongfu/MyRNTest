import React, { useState } from "react"
import App from "../../App";
import {
    Image,
    Text,
    Button,
    View,
    Alert,
    StyleSheet,
    TextInput,
    SafeAreaView,
    ScrollView,
    Picker,
    Switch,
    ActivityIndicator
} from "react-native";

const styles = StyleSheet.create({
   container:{
       marginTop:8,
       paddingHorizontal:8,
       marginHorizontal:8
   },
    horizontal:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btn:{

    }
});

function WidgetDemoPage({ navigation }){
    const [pickerSelectedValue, setPickerSelectedValue] = useState("java");
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
    const toggleSwitch = () => setIsSwitchEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        onPress={ ()=> {
                            Alert.alert("Message" , "The alert dialog is prompted!")
                        }}
                        title={"Show Dialog"} />
                </View>
                <View style={styles.container}>
                    <Text>这是显示文本的控件</Text>
                </View>
                <Image source={require("../../image/a.jpeg")} style={{width:360,height:202.5}}/>
                <View style={styles.container}>
                    <TextInput >This is a TextInput!</TextInput>
                </View>
                <View style={styles.container}>
                    <Picker
                        selectedValue={pickerSelectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setPickerSelectedValue(itemValue)}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={styles.container}>
                    <Switch
                        text
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSwitchEnabled ? "#f5dd4b" : "#f4f3f4"}
                        value={isSwitchEnabled}
                        onValueChange={toggleSwitch}/>
                </View>
                <View style={styles.container}>
                    <Button
                        onPress={()=>{
                            Alert.alert("Error" , "Function Unimplemented!");
                        }}
                        title={"SectionList"}/>
                </View>
                <View style={styles.container}>
                    <Button
                        onPress={()=>{
                            Alert.alert("Error" , "Function Unimplemented!");
                        }}
                        title={"FlatList"}/>
                </View>
                <View style={[styles.container , styles.horizontal]}>
                    <ActivityIndicator color={"#ff0000"}/>
                    <ActivityIndicator size={"small"} color={"#0000ff"}/>
                    <ActivityIndicator size={"large"} color={"#0000ff"}/>
                    <ActivityIndicator color={"#00ff00"}/>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}
export default WidgetDemoPage;