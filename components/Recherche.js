/* eslint-disable no-undef */
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: {
      nom: "Monument des martyrs",
      kilometrage: "6",
      wilaya: "El madania , Algeirs",
      rating: "4",
    },
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: {
      nom: "Monument des martyrs",
      kilometrage: "3",
      wilaya: "El madania , Algeirs",
      rating: "4.3",
    },
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29a80",
    title: {
      nom: "Monument des martyrs",
      kilometrage: "1",
      wilaya: "El madania , Algeirs",
      rating: "5",
    },
  },
  {
    id: "58694a0f-3da1-471f-bd96-146571e29d80",
    title: {
      nom: "Monument des martyrs",
      kilometrage: "1",
      wilaya: "El madania , Algeirs",
      rating: "5",
    },
  },
];

// Les elements de "Suggestions" et "Populaire..."
const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text style={styles.result}>{title.nom}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../images/adress.png")}></Image>
          <Text
            style={{
              paddingLeft: 3,
              paddingRight: 20,
              fontSize: 11,
              color: "grey",
              fontStyle: "normal",
            }}
          >
            {title.wilaya}
          </Text>
          <Image source={require("../images/star.png")}></Image>
          <Text style={{ paddingLeft: 3, fontStyle: "normal", fontSize: 11 }}>
            {title.rating}
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontSize: 11,
            color: "#8168DD",
          }}
        >
          {title.kilometrage} Km
        </Text>
      </View>
    </View>
  </View>
);

const Recherche = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View /****** Barre de recherche */ style={styles.BarreRech}>
        <Pressable onPress={() => navigation.goBack()} focusable>
          <Image
            style={[styles.logo, { width: 24, height: 14.82 }]}
            source={require("../images/back.png")}
          ></Image>
        </Pressable>

        <TextInput
          className="mx-2"
          style={styles.input}
          placeholder="Tapez le nom d'un lieu ..."
        />
        <Pressable onPress={() => navigation.navigate("Filtre")}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={require("../images/filtre.png")}
          ></Image>
        </Pressable>
      </View>
      <View
        style={{
          // ********************** suggestions
          width: "100%",
          borderColor: "#0A0A0A",
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          backgroundColor: "white",
        }}
      >
        <ScrollView>
          <View>
            <Text style={styles.text}>Suggestions</Text>
            {DATA.map(({ title }, i) => (
              <Item key={i} title={title} />
            ))}
          </View>

          <View
            style={{
              // ******************** populaire
              marginTop: 10,
              borderColor: "#0A0A0A",
              borderTopWidth: 0.5,
            }}
          >
            <Text style={styles.text}>Populaire à cette époque</Text>

            {DATA.map(({ title }, i) => (
              <Item key={i} title={title} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    padding: 5,
    flex: 1,
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    flexdirection: "column",
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 13,
    color: "grey",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  BarreRech: {
    width: "100%",
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingLeft: 20,
    borderColor: "#8168DD",
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 13,
  },
  result: {
    fontSize: 13,
    color: "#000000",
    paddingTop: 5,
  },
});

export default Recherche;
