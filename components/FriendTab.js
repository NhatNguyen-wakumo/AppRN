import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class FriendTab extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.containerTop}>
                     <Text style={styles.header}>Friend List</Text>
                </View>
                <View style = {styles.containerMid}>
                    <TextInput
                        style = {styles.title}
                        placeholder = "Enter email"
                        autoCapitalize="none"
                    ></TextInput>
                </View>
                <View style = {styles.containerBot}>
                    <Button 
                        style={styles.btn} 
                        title="Find"
                    ></Button>
                </View>
                
                
         </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerTop: {
        flex: 1
    },
    header:{
        fontSize: 15,
        alignItems: "center",
        textAlign: "center",
        fontSize: 25,
        marginTop: 25,
        fontWeight: "200",
        color: 'red'
    },
    title: {
        alignItems: "center",
        fontSize: 15,
        marginBottom: 415,
        width: 245,
        borderColor: "black",
        borderWidth: 1,
        height: 45,
        borderRadius: 8,
    },
    btn: {
        fontSize: 30,
        backgroundColor: "white",
        height: 20,
        width: 70,
        marginRight: 40,
        marginLeft: 40,
        textAlign: "center",
        color: "black",
        marginBottom: 25
    },
    containerMid:{
        flex: 1,
        marginTop: -390,
       
    },
    containerBot: {
        flex: 1,
        marginTop: -400
    }
})