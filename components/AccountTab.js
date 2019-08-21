import React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class AccountTab extends Component {
    render(){
        return(
            <View style={styles.container}>
            <View>
            <View style={styles.containerUp}>
                <TouchableOpacity>
                <Text style={styles.title}>Home</Text>
                </TouchableOpacity>
            </View>    
            <View style = {styles.containerMid}>
                <TouchableOpacity>
                <Text style = {styles.title}>Account Info</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {styles.title}>Friend List</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {styles.title}>Conversation</Text>
                </TouchableOpacity>   
                
            </View>
            <TouchableOpacity>
            <View style={styles.textInputContainer}>
            <TextInput
            style = {styles.TextInput}
            textContentType='Fullname'
            placeholder='Enter your Fullname'>
              
            </TextInput>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.textInputContainer}>
            <TextInput
            style = {styles.TextInput}
            textContentType='Age'
            placeholder='Enter your Age'>
              
            </TextInput>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.textInputContainer}>
            <TextInput
            style = {styles.TextInput}
            textContentType='Gender'
            placeholder=''>
              
            </TextInput>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.textInputContainer}>
            <TextInput
            style = {styles.TextInput}
            textContentType='Email'
            placeholder='Enter your Email'>
              
            </TextInput>
            
            </View>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}
sss
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'rgb(126,187,93)'
    },
    containerUp: {
        backgroundColor: 'green',
        height: 40,
        alignItems:  "center",
        justifyContent: "center",
        marginTop: 20
    },
    title:{
        color: 'black',
        fontSize: 20
    },
    containerMid: {
        backgroundColor: 'grey',
        height: 35,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    title: {
        color: "black",
        fontSize: 16
    },
    textInputContainer: {
        height: 35,
        marginTop: 20,
        backgroundColor: 'white',
        paddingHorizontal: 10
        
        
    },
    TextInput: {
        width: 280,
        height: 45,
        alignItems: "center"
    }
})  
