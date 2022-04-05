import React from 'react';
import { View, StyleSheet, Text,Dimensions,Image, ScrollView, SafeAreaView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { logToConsole } from 'react-native/Libraries/Utilities/RCTLog';

const WelcomePage = ({navigation}) => {
return (
<SafeAreaView style={styles.container}>
<ScrollView style={styles.schrollview} vertical={true}>
    <View>
    <Image style = {styles.image}
    source ={{uri:"https://i.ibb.co/rbxRL1D/undraw-smart-home-re-orvn.png"}} />
    <Text style={styles.text}>CONTROL YOUR HOUSE</Text>
    </View>

    <View>
    <Image
    style = {styles.image}
    source ={{uri:"https://i.ibb.co/XxXHh4y/undraw-Internet-on-the-go-re-vben.png"}} />
    <Text style={styles.text}>FAST AND EASY</Text>
    </View>

    <View>
    <Image
    style = {styles.image}
    source ={{uri:"https://i.ibb.co/CPYdvvW/undraw-Time-management-re-tk5w-1.png"}} />
    <Text style={styles.text}>GAIN TIME</Text>
    </View>

    <View>
    <Image
    style = {styles.image}
    source ={{uri:"https://i.ibb.co/8BT9RFR/undraw-Savings-re-eq4w-1.png"}} />
    <Text style={styles.text}>SAVE MONEY</Text>
    </View>
    
    <View>
    <Image
    style = {styles.image}
    source ={{uri:"https://i.ibb.co/xLzSLbZ/undraw-Order-confirmed-re-g0if.png"}} />
    <Text style={styles.text}>Let's make your life simpler</Text>
    <Button style={styles.button1} title="GO>" onPress={()=>navigation.navigate('FirstPage')}/>
    </View>
</ScrollView>
</SafeAreaView> 
)
} 

const styles=StyleSheet.create( {
container: {
backgroundColor: "white",
alignItems: "center",
justifyContent: "center",
height: Dimensions.get('window').height,
width: Dimensions.get('window').width,
},

image:{
width: 300,
height:300,
justifyContent: "center",
alignItems:"center",

},
text: {
fontFamily: 'sans-serif-medium',
color:'orange',
marginBottom:250,
position:'absolute',
bottom:2,
fontSize:20,

},
button1: {
backgroundColor: 'darkorange'
},
schrollview:{
  marginHorizontal:20,
},


      });

export default WelcomePage