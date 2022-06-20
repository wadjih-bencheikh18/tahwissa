import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import PhotosPlace from "./PhotosPlace";
import { useState } from "react";
import AvisPlace from "./AvisPlace";
import adress from "../images/adress.png";
import pic from "../images/pic.png";
import time from "../images/time.png";
const content = ["Photos", "Description", "Avis"];

export default function PlaceE() {
  const views = [
    <PhotosPlace key="0" />,
    <Text className="mx-4 mt-3" key="1">
      Le mémorial du Martyr est la place parfaite pour faire des célébrations
      avant le BAC Le mémorial du Martyr, sanctuaire du Martyr ou Maqam Echahid
      est un monument aux morts surplombant la ville d'Alger, érigé en 1982 à
      l'occasion du 20e anniversaire de l'indépendance de l'Algérie (5 juillet
      1962), en mémoire des chahids, les combattants de la guerre d'indépendance
      algérienne morts pour la libération du pays.
    </Text>,

    <AvisPlace key="3" />,
  ];
  const [view, setView] = useState(0);
  return (
    <View className="h-full bg-white">
      <View
        style={{
          padding: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
        }}
        className="min-h-[25%] flex justify-between border-b border-violet-400"
      >
        <View className="mx-2" style={styles.infobloc}>
          <Text style={styles.title}>10 jours avant le BAC</Text>
          <View style={styles.itembloc}>
            <Image source={pic} />
            <Text style={styles.subTitle1}>Evénement - divertissant </Text>
            <View elevation={5} style={styles.button}>
              <Text
                style={{ fontSize: 12, color: "#FFFFFF", fontFamily: "Sen" }}
              >
                Définir un rappel
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 9,
            }}
          >
            <View style={styles.item}>
              <Image style={{ marginRight: 5 }} source={adress} />
              <Text style={styles.subTitle}>El Madania, Algiers</Text>
            </View>
          </View>
          <View style={styles.horaire}>
            <View style={styles.item}>
              <Image style={{ marginRight: 5 }} source={time} />
              <HoraireJour />
            </View>
          </View>
        </View>
        <View className="flex-row justify-around">
          {content.map((c, i) => (
            <Pressable onPress={() => setView(i)} key={c}>
              <Text
                className={`pb-2 text-center -mb-[10px] ${
                  view == i ? "border-b-2 border-[#8168DD]" : ""
                }`}
                style={{
                  color: view == i ? "#8168DD" : "black",
                }}
              >
                {c}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="max-h-[75%]">{views[view]}</View>
    </View>
  );
}
function HoraireJour() {
  return (
    <View style={styles.icon}>
      <Text style={styles.vert10}>02/06/2022 09:00</Text>
      <Text style={styles.subTitle10}> - </Text>
      <Text style={styles.rouge10}>02/06/2022 17:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "80%",
  },
  heure: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  infobloc: {
    marginTop: 5,
    marginBottom: 10,
  },
  itembloc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  daylist: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  title: {
    fontSize: 18,
    fontFamily: "Sen",
    marginBottom: 10,
  },
  subTitle2: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Sen",
    opacity: 0.5,
    marginRight: 130,
  },
  subTitle1: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Sen",
    opacity: 0.5,
    maxWidth: "60%",
    paddingLeft: 5,
  },
  vert: {
    fontSize: 12,
    color: "#38AC0F",
    fontFamily: "Sen",
  },
  rouge10: {
    fontSize: 12,
    color: "#A82424",
    fontFamily: "Sen",
    opacity: 0.5,
  },
  vert10: {
    fontSize: 12,
    color: "#38AC0F",
    fontFamily: "Sen",
    opacity: 0.5,
  },
  rouge: {
    fontSize: 12,
    color: "#A82424",
    fontFamily: "Sen",
  },
  subTitle: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Sen",
    opacity: 0.5,
  },
  subTitle10: {
    fontSize: 10,
    color: "#000000",
    fontFamily: "Sen",
    opacity: 0.5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    fontFamily: "Sen",
  },
  button: {
    marginLeft: 40,
    backgroundColor: "#8168DD",
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 8,
    alignContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  horaire: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  weekdays: {
    marginTop: 10,
    fontSize: 12,
    color: "#000000",
    fontFamily: "Sen",
  },
});
