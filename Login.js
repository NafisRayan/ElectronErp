// Login.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Button title="Login" onPress={() => console.log("Login Pressed")} />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5", // Light background color
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Dark text for better contrast
  },
  input: {
    height: 40,
    borderColor: "#CCC", // Lighter border for a modern look
    borderWidth: 1,
    borderRadius: 5, // Rounded corners for a softer look
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF", // White background for input fields
    width: windowWidth * 0.8, // 80% of screen width
  },
});

export default Login;
