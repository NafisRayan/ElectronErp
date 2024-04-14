// App.js
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login"; // Import the Login component
import Profile from "./components/Profile"; // Import the Profile component

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
