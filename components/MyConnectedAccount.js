import React from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "./customButton/CustomButton";
const colors = {
  textDark: "#000000",
  textLight: "rgba(0, 0, 0, 0.5)",
  icon: "#8168DD",
  background: "#F5F5F5",
};

AntDesign.loadFont();

function MyConnectedAccount({ navigation }) {
  const onSignoutPressed = () => {
    navigation.navigate("SignIn");
  };
  const onChangeAccountPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView style={styles.container}>
      {/*the header*/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <AntDesign name="back" size={22} color={colors.icon} />
          </Pressable>
          <Text style={styles.headerTitle}>Mon compte</Text>
        </View>
      </SafeAreaView>

      {/*inBetween*/}
      <View style={styles.mainIcon}>
        <FontAwesome name="user-circle" size={90} color={colors.icon} />
      </View>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Aymen Nyte</Text>
      </View>

      <View
        style={{
          marginTop: 30,
          borderBottomColor: "#D9D9D9",
          borderBottomWidth: 2,
        }}
      ></View>

      {/*Buttons*/}
      <View style={{ alignItems: "center" }}>
        <CustomButton text="Mes évènements" type="sticker-plus" />
        <CustomButton text="Favoris" type="heart" />
        <CustomButton text="Historique" type="history" />
        <CustomButton
          text="Modifier le compte"
          onPress={onChangeAccountPressed}
          type="account-cog"
        />
        <CustomButton
          text="Se déconnecter"
          onPress={onSignoutPressed}
          type="login"
        />
        <CustomButton text="Paramètres" type="cog" />
        <CustomButton text="Aide" type="help-circle" />
        <CustomButton text="À propos" type="information" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: "#F5F5F5",
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
  mainIcon: {
    marginTop: 22,
    alignItems: "center",
  },
  titlesWrapper: {
    marginTop: 14,
    alignItems: "center",
  },
  titlesSubtitle: {
    fontFamily: "SenB",
    fontSize: 30,
    color: colors.textDark,
  },
  titlesDescrp: {
    fontFamily: "Sen",
    fontSize: 15.5,
    color: colors.textLight,
    marginTop: 25,
    paddingRight: 1,
    paddingLeft: 13,
  },
});

export default MyConnectedAccount;
