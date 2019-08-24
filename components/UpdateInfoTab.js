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
                    <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Information</Text>    
                    </View>           
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style = {styles.TextInput}
                            textContentType='Fullname'
                            placeholder='Enter your Fullname'>
                        </TextInput>
                    </View>
            
            
            <View style={styles.textInputContainer}>
            <TextInput
                style = {styles.TextInput}
                textContentType='Age'
                placeholder='Enter your age'> 
            </TextInput>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style = {styles.TextInput}
                    textContentType='Gender'
                    placeholder='Enter gender'>
              </TextInput>
            </View>
            
            <View style={styles.textInputContainer}>
                <TextInput
                    style = {styles.TextInput}
                    textContentType='Email'
                    placeholder='Enter your Email'>
                </TextInput>
            </View>
            
            <View style={styles.block}>
                <TouchableOpacity style={styles.updateButton}>
                    <Text style={styles.updateButtonTitle}>Update your information</Text>
                </TouchableOpacity>
            </View>
        </View>
             <View style={styles.containerHome}>
                        <TouchableOpacity>
                            <Text style={styles.title}>Home</Text>
                        </TouchableOpacity>
         </View> 
    </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(126,187,93)'
    },
    containerHome: {
        backgroundColor: 'green',
        height: 30,
        width: 60,
        borderRadius: 8,
        alignItems:  "center",
        justifyContent: "center",
        marginTop: 20
    },
    title:{
        color: 'black',
        fontSize: 20,
        alignItems: "center"
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
        fontSize: 20,
        alignItems: "center",
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
    },
    updateButton: {
        width: 250,
        height: 35,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(91, 165, 166)',
        marginTop: 10
    },
    updateButtonTitle: {
        fontSize: 20,
        color: 'black'
    },
    block:{
        alignItems: "center",
        marginTop: 10
    },
    headerTitle: {
        color: "red",
        fontSize: 30,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 30

    }

})  
