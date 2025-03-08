import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    console.log("User Registered:", { firstName, lastName, email });
    Alert.alert("Success", "Registration Completed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>

      <TouchableOpacity onPress={() => console.log("Profile Image Clicked")}>
        <Image
          style={styles.imageContainer}
          source={require("./src/assets/boy_01.png")}
        />
      </TouchableOpacity>

      <TextInput
        value={firstName}
        placeholder="First Name"
        style={styles.input}
        onChangeText={setFirstName}
      />

      <TextInput
        value={lastName}
        placeholder="Last Name"
        style={styles.input}
        onChangeText={setLastName}
      />

      <TextInput
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        value={password}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it circular
    borderWidth: 2,
    borderColor: "#007bff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;