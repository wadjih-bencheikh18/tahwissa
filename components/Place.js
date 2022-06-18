import { View, Text, Pressable } from "react-native";
import PhotosPlace from "./PhotosPlace";
import { useState } from "react";
import AvisPlace from "./AvisPlace";
const content = ["Photos", "Description", "Évènements", "Avis"];
const views = [
  <PhotosPlace key="0" />,
  <AvisPlace key="1" />,

  <PhotosPlace key="2" />,

  <AvisPlace key="3" />,
];
export default function Place() {
  const [view, setView] = useState(0);
  return (
    <View className="h-full">
      <View
        style={{
          borderRadius: 10,
          padding: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
        }}
        className="h-[30%] flex justify-end border-b border-violet-400"
      >
        <Text className="p-20">Description kda kda...</Text>
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

      <View className="h-[70%]">{views[view]}</View>
    </View>
  );
}
