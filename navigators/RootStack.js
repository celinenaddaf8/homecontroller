import React from 'react';

//react native navigation
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

//screens 
import FirstPage from './../components/screens/FirstPage.js';
import LoginPage from './../components/screens/LoginPage.js';
import SignupPage from './../components/screens/SignupPage.js';
import WelcomePage from '../components/screens/WelcomePage.js';


const Stack = createNativeStackNavigator();


const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions ={
                {
                headerTintColor: "#1F2937",
                headerTransparent: true,
                headerTitle:'',
                headerLeftContainerStyle: {
                    paddingleft:"20px"
                }
            }}
            initialRouteName = 'WelcomePage' >
                
                <Stack.Screen name = 'LoginPage' component = {LoginPage} />
                <Stack.Screen name = 'SignupPage' component = {SignupPage} /> 
                <Stack.Screen name = 'FirstPage' component = {FirstPage} />
                <Stack.Screen name = 'WelcomePage' component = {WelcomePage} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
    
export default RootStack