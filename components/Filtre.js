/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function Filtre() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "99%",
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "80%",
            height: 40,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Text
            style={styles.textChoix}
            onPress={() => {
              console.log("hy there");
            }}
          >
            Périmétre
          </Text>
          <Text style={styles.textChoixInit}>Catégorie</Text>
          <Text style={styles.textChoixInit}>Théme</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          borderTopColor: "#C1C1C1",
          borderTopWidth: 0.5,
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Pressable
          style={
            // **************** button Admin/Geo
            styles.bigButton
          }
          onPress={() => {
            console.log("yes");
          }}
        >
          <Text style={styles.textButton}>Administratif</Text>
          <Text style={{ color: "#8168DD", fontSize: 10 }}>Geographique</Text>
        </Pressable>
        <View
          style={{
            // ********************************* Wilaya
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 13,
              paddingRight: 25,
            }}
          >
            Wilaya
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Tapez le nom d'une Wilaya ..."
            onChange={console.log("i have changed")}
          ></TextInput>
        </View>
        <View
          style={{
            // ********************************* Baladiya
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 13,
              paddingRight: 10,
            }}
          >
            Baladiya
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Tapez le nom d'une baladiya ..."
            onChange={console.log("i have changed")}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    alignItems: "center",
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    elevation: 3,
    color: "#8168DD",
    fontSize: 10,
    backgroundColor: "#C1C1C1",
  },
  bigButton: {
    alignItems: "center",
    height: 30,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 0,
    paddingRight: 14,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "white",
    borderColor: "#8168DD",
    borderWidth: 1,
  },
  text: {
    color: "white",
  },
  textButton: {
    color: "white",
    fontSize: 10,
    backgroundColor: "#8168DD",
    borderColor: "#8168DD",
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 15,
    height: 30,
    width: 100,
  },
  textChoix: {
    color: "#8168DD",
    borderBottomColor: "#8168DD",
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  textChoixInit: {
    color: "#000000",
    paddingBottom: 5,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingLeft: 20,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 13,
  },
});
