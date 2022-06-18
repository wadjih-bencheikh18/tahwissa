import Start from "./Start";
import Map from "./Map";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-ico";
import MAPB from "../images/MAPB.png";
import MAPP from "../images/MAPP.png";
import VRB from "../images/VRB.png";
import VRP from "../images/VRP.png";
import ITB from "../images/ITB.png";
import ITP from "../images/ITP.png";

const Tab = createBottomTabNavigator();
export default function Home() {
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
          borderRadius: 100,
          backgroundColor: "#8168DD",
          position: "absolute",
          paddingLeft: 4,
          paddingRight: 4,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explorer" component={Map} />
      <Tab.Screen
        name="Évènements"
        component={Start}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Itinéraires" component={Start} />
      <Tab.Screen name="Visites en ligne" component={Start} />
    </Tab.Navigator>
  );
}
