import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const colors = {
  textDark: "#000000",
  textLight: "rgba(0, 0, 0, 0.5)",
  icon: "#8168DD",
  background: "#F5F5F5",
};
const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name={type}
        size={27}
        color={colors.icon}
        style={{ marginLeft: 20, marginBottom: 12.5 }}
      />
      <Text style={styles.text}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 12.5,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    alignItems: "center",
  },
  text: {
    fontFamily: "Sen",
    color: colors.textDark,
    fontSize: 20,
    left: 11,
    marginBottom: 12.5,
  },
});

export default CustomButton;
