import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/app_logo.png")} style={styles.logo} />
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Login Pressed")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Calculate responsive padding
// const windowWidth * 0.05 = windowWidth * 0.05; // 5% of screen width

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: windowWidth * 1, // Use responsive padding
    paddingVertical: windowHeight * 1,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    width: windowWidth * 0.8,
  },
  logo: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    width: windowWidth * 0.8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: windowWidth * 0.05, // Add responsive horizontal padding
    paddingVertical: (windowHeight * 0.005) / 2, // Add responsive vertical padding
  },
});

export default Login;
