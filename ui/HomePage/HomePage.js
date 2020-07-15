import {Button, StyleSheet, View} from "react-native";
import React from "react";

function HomePage({ navigation }){
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
const homePageStyle = StyleSheet.create({
    btn:{
    },
    btnContainer:{
        marginTop:8,
        paddingHorizontal:8,
        marginHorizontal:8
    }
});
export default HomePage;