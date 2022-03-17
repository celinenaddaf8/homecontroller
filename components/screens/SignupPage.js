import React from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PhoneInput from "react-native-phone-number-input";


const SignupPage = ({navigation}) => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
              Create Your Account
          </Text>
          <TextInput style={styles.input1}> First Name</TextInput>
          <TextInput style={styles.input2}> Last Name</TextInput>
          <TextInput style={styles.input3}> Email address</TextInput>
          <TextInput style={styles.input4}> Password</TextInput>
          <TextInput style={styles.input5}> Select your country</TextInput>
          <PhoneInput style={styles.input6}> Mobile number </PhoneInput>
          <TextInput style={styles.input7}> Enter your address</TextInput>
          <Button style={styles.button} title='Create account' onPress={()=>navigation.navigate('LoginPage')}/>
      </View>
    )}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection: 'column',
            justifyContent:"center",
            alignItems:"center", 
            flexDirection: 'column'
        
          },
        input1:{
            borderRadius:9,
            margin:10,
            borderWidth:1,
            borderColor:'grey',
            width:350,
            height:30,
            color:'grey',
          

        },
        text: {
                borderRadius:9,
                fontFamily:"sans-serif-medium",
                color: 'dimgrey',
                fontSize :30,
                position : "absolute", 
                top : 0,
                paddingTop : "15%"
        },
        input2: {
            margin:10,
            borderRadius:9,
            borderWidth:1,
            borderColor:'grey',
            width:350,
            height:30,
            color:'grey'
          

        },
        input3: {
            margin:10,
            borderWidth:1,
            borderRadius:9,
            borderColor:'grey',
            width:350,
            height:30,
            color:'grey'
          

        },
        input4: {
            borderWidth:1,
            borderRadius:9,
            borderColor:'grey',
            width:350,
            height:30,
            color:'grey',
            margin:10,

        },
        input5: {
            margin:10,
            borderWidth:1,
            borderColor:'grey',
            width:350,
            height:30,
            borderRadius:9,
            color:'grey'
          

        },
        input6: {
            margin:10,
            borderWidth:1,
            borderColor:'grey',
            width:350,
            height:30,
            borderRadius:9,
            color:'grey'
          

        },
        input7: {
            margin:10,
            borderWidth:1,
            borderColor:'grey',
            width:350,
            height:30,
            borderRadius:9,
            color:'grey'
        },
        
        
    })
    
export default SignupPage
        