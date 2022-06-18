import React, { useState } from "react";

import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { Icon } from "@rneui/themed";

export default function AvisPlace() {
  const [comments, setComments] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [star, setStar] = useState([
    { type: "feather", opac: 0.4 },
    { type: "FontAwesome", opac: 0.9 },
  ]);

  return (
    <View className="h-full">
      <ScrollView className="mx-4">
        <View className="bg-violet-50 mx-2 rounded-xl mt-4 px-5 py-3">
          <View className="flex flex-row items-center justify-between pb-2">
            <Text className="text-base">Tiziri Batenjal</Text>
            <Text className="text-sm text-right text-violet-400">
              Il y a 2 mois
            </Text>
          </View>
          <Text className="text-gray-500">
            C'est l'endroit parfait pour les sorties en famille ! Je recommande.
          </Text>
          {/* icons */}
          <View className="flex flex-row space-x-8">
            <View className="flex flex-row items-end gap-x-1 pt-4">
              <Icon
                name="thumbs-up"
                type="feather"
                size={20}
                color="rgb(107, 114, 128)"
              />
              <Text className="text-gray-500">5</Text>
            </View>
            <View className="flex flex-row items-end gap-x-1 pt-4">
              <Icon
                name="thumbs-down"
                type="feather"
                size={20}
                color="rgb(107, 114, 128)"
                style={{ transform: [{ scaleX: -1 }] }}
              />
              <Text className="text-gray-500">0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="border-t px-8 py-5">
        <View className="flex flex-row justify-between">
          <Text className="text-gray-500">Donner une note:</Text>
          <View className="flex flex-row space-x-3">
            <Pressable
              onPress={() => {
                setRate(1);
              }}
            >
              <Icon
                name="star"
                type="FontAwesome"
                size={20}
                color="rgb(129,104,221)"
                style={{ opacity: 0.9 }}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setRate(2);
              }}
            >
              <Icon
                name="star"
                type="feather"
                size={20}
                color="rgb(129,104,221)"
                style={{ opacity: 0.4 }}
              />
            </Pressable>
            <Icon
              name="star"
              type="feather"
              size={20}
              color="rgb(129,104,221)"
              style={{ opacity: 0.4 }}
            />
            <Icon
              name="star"
              type="feather"
              size={20}
              color="rgb(129,104,221)"
              style={{ opacity: 0.4 }}
            />
            <Icon
              name="star"
              type="feather"
              size={20}
              color="rgb(129,104,221)"
              style={{ opacity: 0.4 }}
            />
          </View>
        </View>
        <View className="bg-violet-50 h-12 flex flex-row justify-between items-center rounded-3xl mt-4 px-4">
          <TextInput
            placeholder="Laisser un commentaire..."
            className=""
            onChangeText={setComment}
            value={comment}
          ></TextInput>
          <Pressable
            onPress={() => {
              setComments((comments) => [...comments, comment]);
              setComment("");
            }}
          >
            <Icon
              name="send"
              type="feather"
              size={20}
              color="rgb(129,104,221)"
              style={{ transform: [{ rotate: "45deg" }], width: 30 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
