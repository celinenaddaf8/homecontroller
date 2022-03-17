import React from 'react';
import { View, StyleSheet, Text,Dimensions,Image,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';



const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SMART HOME</Text>
      <StatusBar style="auto" />
      <Image style = {styles.image}
        source ={{uri:"https://i.ibb.co/3c8QBV1/Microsoft-Teams-image.png"}} />
      <Button style={styles.button} title="GO>" onPress={()=>navigation.navigate('LoginPage')} />
    </View>
        )
      }

const styles = StyleSheet.create({
    container: {  
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
    text:{
      fontFamily:"sans-serif-medium",
      color: 'dimgrey',
      fontSize :30,
      marginBottom: 30,
      position: 'absolute',
      bottom: 0
    },

    image:{
      width: 800,
      height:800,
      justifyContent: "center",
      marginBottom: -500
    

    }

    
  });

export default FirstPage