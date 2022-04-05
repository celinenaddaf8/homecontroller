import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import AuthContext from "../context";

import Users from "../../model/users";

const LoginPage = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username ? password : item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome to Smart Home </Text>
      <Text style={styles.text2}>Username</Text>
      <View>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          style={styles.input1}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
        />
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {data.isValidUser && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Username must be 4 characters long
          </Text>
        </Animatable.View>
      )}
      <Text style={styles.text2}>Password</Text>
      <View>
        <Feather name="lock" color="grey" size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
          secureTextEntry={data.secureTextEntry && true}
          style={[styles.input2, {}]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry && (
            <Feather name="eye-off" color="grey" size={20} />
          )}
          <Feather name="eye" color="grey" size={20} />
        </TouchableOpacity>
      </View>
      {data.isValidPassword && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        </Animatable.View>
      )}

      <Button
        style={styles.button1}
        title="LOG IN"
        onPress={() => {
          loginHandle(data.username, data.password);
        }}
      ></Button>

      <Button style={styles.button1} title="Forgot password?"></Button>
      <Text style={styles.text2}>Don't have an account?</Text>
      <Button
        style={styles.button3}
        title="Sign up"
        onPress={() => navigation.navigate("SignupPage")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  text1: {
    fontFamily: "sans-serif-medium",
    color: "dimgrey",
    fontSize: 30,
    position: "absolute",
    top: 0,
    paddingTop: "15%",
  },
  input1: {
    borderWidth: 1.5,
    borderLeftWidth: 2,
    borderRadius: 10,
    width: 350,
    height: 30,
    color: "grey",
    borderColor: "orange",
  },
  input2: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderLeftWidth: 2,
    height: 30,
    width: 350,
    color: "grey",
    borderColor: "orange",
  },
  text2: {
    color: "grey",
  },

  button1: {
    backgroundColor: "darkorange",
  },
  button3: {},
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
});

export default LoginPage;
