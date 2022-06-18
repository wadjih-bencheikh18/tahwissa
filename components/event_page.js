import React from "react";
import { Image, ScrollView, View, Text, StyleSheet } from "react-native";
import Event from "./event";
import filtre from "../images/filtre.png";
import search from "../images/Vector.png";
import pdp from "../images/PDP.png";
function Eventpage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mx-5" style={styles.header}>
          <Text style={styles.sectionTitle}>Évènements</Text>
          <View style={styles.icons}>
            <Image style={{ width: 21, height: 21 }} source={search} />
            <Image
              style={{ marginHorizontal: 18, width: 21, height: 21 }}
              source={filtre}
            />
            <Image style={{ width: 30, height: 30 }} source={pdp} />
          </View>
        </View>
        <View
          className="px-5"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#00000050",
            marginBottom: 20,
          }}
        >
          <View style={styles.subT}>
            <Text className="w-10 text-center" style={styles.subTitleselected}>
              Tout
            </Text>
            <Text className="w-30 text-center" style={styles.subTitle}>
              Proche de moi
            </Text>
            <Text className="w-30 text-center" style={styles.subTitle}>
              Plus enticipé
            </Text>
          </View>
        </View>
        <View>
          <Event
            onPress={() => navigation.navigate("Place")}
            title="10 jours avant le bac"
            adress="El Moradia Alger"
            time="1 jour"
            date="2 juin 2022"
          />
          <Event
            onPress={() => navigation.navigate("Place")}
            title="Match Algerie-Cameroun"
            adress="5 juillet"
            time="19 jour"
            date="21 juin 2022"
          />
          <Event
            onPress={() => navigation.navigate("Place")}
            title="Jeux méditerranéens"
            adress="Oran"
            time="20 jours"
            date="22 juin 2022"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingTop: 25,
    paddingBottom: 25,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subTitleselected: {
    fontSize: 12,
    color: "#8168DD",
    fontFamily: "Sen",
  },
  subT: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Sen",
    marginTop: 21,
    marginBottom: 7,
    marginHorizontal: 10,
  },
  subTitle: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Sen",
    opacity: 0.5,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: "Sen",
  },
});
export default Eventpage;
