import React from "react"
import App from "./App";
import {Button, View} from "react-native";

function WidgetDemoPage(){
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
    export default WidgetDemoPage;