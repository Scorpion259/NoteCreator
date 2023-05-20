import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from "react-native";
import colors from "../misc/colors";
import RoundIconBtn from "../components/RoundIconBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Authorization = ({ onFinish }) => {
  const [userLogin, setUserLogin] = useState("");

  const handleOnChangeText = (text) => {
    setUserLogin(text);
  };

  const handleSubmit = async () => {
    const user = { userLogin: userLogin };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter login</Text>
      <TextInput
        value={userLogin}
        onChangeText={handleOnChangeText}
        placeholder="Enter Name"
        style={styles.textInput}
      />
      <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
    </View>
  );
};

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.primary,
    color: colors.primary,
    width,
    height: 50,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Authorization;
