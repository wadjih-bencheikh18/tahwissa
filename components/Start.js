import {
  View,
  Text,
  Button,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Logo from "../images/logo.png";
export default function Start({ navigation }) {
  return (
    <TouchableNativeFeedback
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("Home")}
      background={TouchableNativeFeedback.Ripple("#8168DD", false)}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image className="mb-20 mt-20" source={Logo} />
        <Text className="text-3xl mx-3 mb-10 text-center">
          Votre guide touristique algérien
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}
