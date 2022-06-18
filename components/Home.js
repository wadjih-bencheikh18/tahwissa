import Start from "./Start";
import Map from "./Map";
import { Image, Pressable, TextInput, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-ico";
import MAPB from "../images/MAPB.png";
import MAPP from "../images/MAPP.png";
import VRB from "../images/VRB.png";
import VRP from "../images/VRP.png";
import ITB from "../images/ITB.png";
import ITP from "../images/ITP.png";
import PDP from "../images/PDP.png";
import Eventpage from "./event_page";

const Tab = createBottomTabNavigator();
export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Évènements") {
            return (
              <Icon
                name="power-connection-indicator"
                group="material-design"
                color={color}
                size={size}
              />
            );
          } else if (route.name === "Explorer") {
            if (focused)
              return <Image source={MAPP} style={{ width: 26, height: 24 }} />;
            else
              return <Image source={MAPB} style={{ width: 26, height: 24 }} />;
          } else if (route.name === "Itinéraires") {
            if (focused)
              return <Image source={ITP} style={{ width: 24, height: 24 }} />;
            else
              return <Image source={ITB} style={{ width: 24, height: 24 }} />;
          } else if (route.name === "Visites en ligne") {
            if (focused)
              return (
                <Image source={VRP} style={{ width: 32.5, height: 18.7 }} />
              );
            else
              return (
                <Image source={VRB} style={{ width: 32.5, height: 18.7 }} />
              );
          }
        },
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "#8168DD",
          position: "absolute",
          paddingLeft: 4,
          paddingRight: 4,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        header: () => (
          <View className="bg-white mx-[5%] h-14 flex justify-between shadow-xl flex-row items-center px-10 w-[90%] border-3 rounded-[100px] mt-14 absolute">
            <TextInput
              placeholder="Rechercher ou filter..."
              className=" -ml-5 w-[97%] caret-red-500"
            ></TextInput>
            <Pressable onPress={() => navigation.navigate("MyAccountScreen")}>
              <Image
                className="ml-4"
                source={PDP}
                style={{ width: 40, height: 40 }}
              />
            </Pressable>
          </View>
        ),
      })}
    >
      <Tab.Screen name="Explorer" component={Map} />
      <Tab.Screen
        name="Évènements"
        component={Eventpage}
        options={{ tabBarBadge: 3, headerShown: false }}
      />
      <Tab.Screen name="Itinéraires" component={Start} />
      <Tab.Screen name="Visites en ligne" component={Start} />
    </Tab.Navigator>
  );
}
