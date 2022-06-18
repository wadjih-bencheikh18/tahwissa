import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const colors = {
  textDark: "#000000",
  textLight: "rgba(0, 0, 0, 0.5)",
  icon: "#8168DD",
  background: "#F5F5F5",
};
const CustomInput = ({ text }) => {
  return (
    <View className="w-full mt-5" style={styles.container}>
      <Text className="left-0 absolute w-32" style={styles.text}>
        {text}
      </Text>
      <TextInput
        className="right-0 absolute px-2"
        placeholder=""
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    //alignContent: 'space-between',
    paddingTop: 25,
    //paddingEnd: 5,
    //paddingLeft: 5,
  },
  text: {
    fontFamily: "Sen",
    fontSize: 17,
    color: colors.textDark,
    //paddingLeft: 50,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  input: {
    borderWidth: 1,
    //paddingLeft: 12.5,
    fontSize: 15.75,
    fontFamily: "Sen",
    backgroundColor: "#ffff",
    borderColor: colors.icon,
    borderRadius: 7,
    width: "55%",
  },
});

export default CustomInput;
