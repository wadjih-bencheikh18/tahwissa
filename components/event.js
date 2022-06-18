import React from "react";
import { Image, ScrollView, View, Text, StyleSheet } from "react-native";

const Event = (props) => {
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: "#8168DD" }}>
      <View style={styles.infobloc}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.eventinfo}>
            <View style={styles.adress}>
              <Image
                style={{ marginRight: 5 }}
                source={require("../images/adress.png")}
              />
              <Text style={styles.subtitle}>{props.adress}</Text>
            </View>
            <View style={styles.time}>
              <Image
                style={{ marginRight: 5 }}
                source={require("../images/time.png")}
              />
              <Text style={styles.subtitle}>{props.time}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infobloc: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Sen",
  },
  eventinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 12,
    color: "#000000",
    opacity: 0.5,
    fontFamily: "Sen",
  },
  date: {
    fontSize: 12,
    color: "#8168DD",
    fontFamily: "Sen",
    marginBottom: 18,
  },
  adress: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginRight: 20,
    fontFamily: "Sen",
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    fontFamily: "Sen",
  },
});
export default Event;
