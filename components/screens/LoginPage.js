import React from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginPage = ({navigation}) => {
    return (
      <View style={styles.container}>   
        <Text style={styles.text1}>Welcome to Smart Home </Text>     
        <TextInput style={styles.input1}>email address</TextInput>
        <TextInput style={styles.input2}>password</TextInput>
        <Button style={styles.button1} title='LOG IN' onPress={() => navigation.navigate('FirstPage')}/>
        <Button style ={styles.button1} title='Forgot password?'/>
        <Text style={styles.text2}>Don't have an account?</Text>
        <Button style={styles.button3} title='Sign up' onPress={() => navigation.navigate('SignupPage')}/>
        <StatusBar style="auto" />       
      </View>
        )
      }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center", 
    flexDirection: 'column'

  },

  text1: {
    fontFamily:"sans-serif-medium",
    color: 'dimgrey',
    fontSize :30,
    position : "absolute", 
    top : 0,
    paddingTop : "15%",
  },
  input1: {
       borderWidth:1.5,
       borderLeftWidth:2,
       borderRadius:10,
       width:350,
       height:30,
       color:'grey',
       borderColor:'orange',

  },
  input2: {
       margin:20,
       borderRadius:10,
       borderWidth:1.5,
       borderLeftWidth:2,
       height:30,
       width:350,
       color:'grey',
       borderColor:'orange',
       
       
  },
  text2: {
    color: 'grey',
    
  },
  button1: {
    backgroundColor: 'darkorange' ,
  },
  button3:{

    
  
  }
})

export default LoginPage
