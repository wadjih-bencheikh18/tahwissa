import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";

import CustomInput from "./CustomInput/CustomInput";
const colors = {
  textDark: "#000000",
  textLight: "rgba(0, 0, 0, 0.5)",
  icon: "#8168DD",
  background: "#F5F5F5",
};
AntDesign.loadFont();

function SignIn({ navigation }) {
  const onSignupPressed = () => {
    navigation.navigate("MyConnectedAccount");
  };

  return (
    <View style={styles.container}>
      {/*the header*/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={22} color={colors.icon} />
          </Pressable>
          <Text style={styles.headerTitle}>Se connecter</Text>
        </View>
      </SafeAreaView>

      {/*InBetween*/}
      <View>
        <Text style={styles.titlesDescrp}>
          Connectez-vous à votre compte utilisateur
        </Text>
      </View>

      {/*InPuts*/}
      <View className=" flex mx-5 items-end text-left">
        <CustomInput text="Email" />
        <CustomInput text="Mot de passe" />
      </View>

      {/*ConfirmationButton*/}

      <Pressable
        className="flex-row justify-center mt-9"
        onPress={onSignupPressed}
      >
        <Text style={styles.text}> Se connecter </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: "#F5F5F5",
  },
  text: {
    backgroundColor: colors.icon,
    color: "white",
    fontSize: 18.5,
    fontFamily: "Sen",
    borderColor: "lightgrey",
    borderWidth: 0.5,
    width: "50%",
    height: 30,
    borderRadius: 7,
    textAlign: "center",
    paddingTop: 3,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    left: 11,
    fontFamily: "Sen",
  },
  titlesDescrp: {
    fontFamily: "Sen",
    fontSize: 17,
    color: colors.textLight,
    marginTop: 25,
    paddingRight: 1,
    paddingLeft: 24,
    paddingBottom: 75,
  },
});

export default SignIn;
