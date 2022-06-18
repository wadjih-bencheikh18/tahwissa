import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import time from "../images/time.png";
import adress from "../images/adress.png";
const Event = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View
        className={props.className}
        style={{
          borderBottomWidth: 1,
          marginLeft: 12,
          marginRight: 12,
          borderBottomColor: "#8168DD",
        }}
      >
        <View style={styles.infobloc}>
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.eventinfo}>
              <View style={styles.adress}>
                <Image style={{ marginRight: 5 }} source={adress} />
                <Text style={styles.subtitle}>{props.adress}</Text>
              </View>
              <View style={styles.time}>
                <Image style={{ marginRight: 5 }} source={time} />
                <Text style={styles.subtitle}>{props.time}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </View>
    </Pressable>
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
