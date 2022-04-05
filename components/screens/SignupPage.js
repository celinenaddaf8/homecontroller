import React,{useState} from 'react';
import {View, 
    StyleSheet, 
    Text, 
    TextInput, 
    Button, 
    TouchableOpacity,
    ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PhoneInput from "react-native-phone-number-input";


const SignupPage = ({navigation}) => {
    const [data, setData] = useState({
        username: '',
        password: '',
        confirm_password: '',
        country:'',
        number:'',
        adress:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
        setData({
        ...data,
        username: val,
        check_textInputChange: true
        });
        } else {
        setData({
        ...data,
        username: val,
        check_textInputChange: false
        });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
        ...data,
        password: val
        });
        }

    const handleCountryChange = (val) => {
        setData({
        ...data,
        confirm_password: val
        });
        }
    const handleNumberChange = (val) => {
        setData({
        ...data,
        confirm_password: val
        });
        }

    const handleAdressChange = (val) => {
        setData({
        ...data,
        confirm_password: val
        });
        }
    const handleConfirmPasswordChange = (val) => {
        setData({
        ...data,
        confirm_password: val
        });
        }
    const updateSecureTextEntry = () => {
        setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
        });
        }

    const updateConfirmSecureTextEntry = () => {
        setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
<ScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>Create Your Account</Text>
        <Text style={styles.text2}>Username</Text>
        <View>
        <FontAwesome 
        name="user-o"
        color="grey"
        size={20}/>
        <TextInput 
        placeholder="Your Username"
        style={styles.input1}
        autoCapitalize="none"
        onChangeText={(val) => textInputChange(val)}/>
        {data.check_textInputChange ? 
        <Animatable.View
        animation="bounceIn">
        <Feather 
        name="check-circle"
        color="green"
        size={20}/>
        </Animatable.View>
        :<></>}
        </View>

    <Text style={[styles.text2, {
    marginTop: 35
    }]}>Password</Text>
    <View>
    <Feather 
    name="lock"
    color="#05375a"
    size={20}/>
    <TextInput 
    placeholder="Your Password"
    secureTextEntry={data.secureTextEntry ? true : false}
    style={styles.input2}
    autoCapitalize="none"
    onChangeText={(val) => handlePasswordChange(val)}/>
    <TouchableOpacity
    onPress={updateSecureTextEntry}>
    {data.secureTextEntry ? 
    <Feather 
    name="eye-off"
    color="grey"
    size={20}/>
    :
    <Feather 
    name="eye"
    color="grey"
    size={20}/>
    }
    </TouchableOpacity>
    </View>

    <Text style={[styles.text2,{
    marginTop: 35
    }]}>Confirm Password</Text>
    <View>
    <Feather 
    name="lock"
    color="#05375a"
    size={20}/>
    <TextInput 
    placeholder="Confirm Your Password"
    secureTextEntry={data.confirm_secureTextEntry ? true : false}
    style={styles.input2}
    autoCapitalize="none"
    onChangeText={(val) => handleConfirmPasswordChange(val)}/>
    <TouchableOpacity
    onPress={updateConfirmSecureTextEntry}>
    {data.secureTextEntry ? 
    <Feather 
    name="eye-off"
    color="grey"
    size={20}/>
    :
    <Feather 
    name="eye"
    color="grey"
    size={20}/>
    }
    </TouchableOpacity>
    </View>
    <Text style={[styles.text2, {
    marginTop: 35
    }]}>Enter your country</Text>
    <View>
    <TextInput style={styles.input5} 
    label="country"
    autoCapitalize="none"
    onChangeText={(val) => handleCountryChange(val)}/>
    {data.check_textInputChange ? 
    <Animatable.View
    animation="bounceIn">
    <Feather 
    name="check-circle"
    color="green"
    size={20}/>
    </Animatable.View>
    :<></>}
    </View>       

    <View>
    <Text style={[styles.text2, {
    marginTop: 35
    }]}>Enter your phone number</Text>
    <PhoneInput style={styles.input6} 
    label="number"
    autoCapitalize="none"
    onChangeText={(val) => handleNumberChange(val)}/>
    {data.check_textInputChange ? 
    <Animatable.View
    animation="bounceIn">
    <Feather 
    name="check-circle"
    color="green"
    size={20}/>
    </Animatable.View>:<></>}
    </View>       

    <Text style={[styles.text2, {
    marginTop: 35
    }]}>Enter your adress</Text>
    <View>

    <TextInput style={styles.input7} 
    label="adress"
    autoCapitalize="none"
    onChangeText={(val) => handleAdressChange(val)}/>
    {data.check_textInputChange ? 
    <Animatable.View
    animation="bounceIn">
    <Feather 
    name="check-circle"
    color="green"
    size={20}/>
    </Animatable.View>
    : <></>}
    </View>
    <Button style={styles.button} title='Create account' onPress={() => navigation.goBack()}/>
    </View>
</ScrollView>
};

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
text2: {
color: 'grey'},

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
text2:{
color: 'grey',
},


});

export default SignupPage
