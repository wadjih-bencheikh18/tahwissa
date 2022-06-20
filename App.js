/* eslint-disable no-undef */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from "react-native-ico";
import Start from "./components/Start";
import Home from "./components/Home";
import Place from "./components/Place";
import PlaceE from "./components/PlaceE";
import { useFonts } from "expo-font";
import MyAccountScreen from "./components/MyAccountScreen";
import MyConnectedAccount from "./components/MyConnectedAccount";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Filtre from "./components/Filtre";
import Recherche from "./components/Recherche";
const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    Sen: require("./font/Sen-Regular.ttf"),
    SenEB: require("./font/Sen-ExtraBold.ttf"),
    SenB: require("./font/Sen-Bold.ttf"),
  });
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Details"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="MyConnectedAccount"
            component={MyConnectedAccount}
          />
          <Stack.Screen name="Recherche" component={Recherche} />
          <Stack.Screen
            options={{
              headerBackVisible: true,
              headerShown: true,
              header: ({ navigation }) => (
                <View
                  className="mx-5"
                  style={{
                    marginTop: 40,
                    height: 40,

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image
                      style={{ width: 24, height: 14.82 }}
                      source={require("./images/back.png")}
                    />
                  </Pressable>
                  <Text className="text-lg mr-10">Filtrer les lieux</Text>
                  <Pressable
                    style={{
                      alignItems: "center",
                      height: 40,
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      borderRadius: 6,
                      elevation: 3,
                      color: "#8168DD",
                      fontSize: 10,
                      backgroundColor: "#C1C1C1",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      Appliquer
                    </Text>
                  </Pressable>
                </View>
              ),
            }}
            name="Filtre"
            component={Filtre}
          />
          <Stack.Screen
            options={{
              headerBackVisible: true,
              headerShown: true,
              header: ({ navigation }) => (
                <View
                  className="mx-5"
                  style={{
                    marginTop: 30,
                    height: 40,

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image
                      style={{ width: 24, height: 14.82 }}
                      source={require("./images/arrowDOWN.png")}
                    />
                  </Pressable>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      maxWidth: "80%",
                    }}
                  >
                    <Image
                      style={{ marginRight: 15, width: 21, height: 21 }}
                      source={require("./images/Vector.png")}
                    />
                    <Image
                      style={{ width: 21, height: 18.5 }}
                      source={require("./images/heart.png")}
                    />
                  </View>
                </View>
              ),
            }}
            name="PlaceE"
            component={PlaceE}
          />
          <Stack.Screen
            options={{
              headerBackVisible: true,
              headerShown: true,
              header: ({ navigation }) => (
                <View
                  className="mx-5"
                  style={{
                    marginTop: 30,
                    height: 40,

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable onPress={() => navigation.goBack()}>
                    <Image
                      style={{ width: 24, height: 14.82 }}
                      source={require("./images/arrowDOWN.png")}
                    />
                  </Pressable>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      maxWidth: "80%",
                    }}
                  >
                    <Image
                      style={{ marginRight: 15, width: 21, height: 21 }}
                      source={require("./images/Vector.png")}
                    />
                    <Image
                      style={{ width: 21, height: 18.5 }}
                      source={require("./images/heart.png")}
                    />
                  </View>
                </View>
              ),
            }}
            name="Place"
            component={Place}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "blue",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <Icon
                  name="searching-magnifying-glass"
                  group="material-design"
                  onPress={() => alert("This is a button!")}
                  title="Search"
                  color="#fff"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
