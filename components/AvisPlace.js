import React, { useState } from "react";

import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { Icon } from "@rneui/themed";

export default function AvisPlace() {
  const [comments, setComments] = useState([
    {
      user: "Tiziri Batenjal",
      date: "Il y a 2 mois",
      text: "C'est l'endroit parfait pour les sorties en famille ! Je recommande.",
      like: 5,
      dislike: 0,
    },
    {
      user: "Serina",
      date: "A l'instant",
      text: "Je suis d'accord avec Mme Batenjal",
      like: 0,
      dislike: 0,
    },
  ]);
  const [comment, setComment] = useState("");
  const [thumb, setThumb] = useState("");
  const [rate, setRate] = useState(0);
  const sType = [
    { type: "feather", opacity: 0.4 },
    { type: "FontAwesome", opacity: 0.9 },
  ];
  const Star = ({ onPress, on }) => (
    <Pressable onPress={onPress}>
      <Icon
        name="star"
        type={sType[on ? 1 : 0].type}
        size={20}
        color="rgb(129,104,221)"
        style={{ opacity: sType[on ? 1 : 0].opacity }}
      />
    </Pressable>
  );

  return (
    <View className="h-full">
      <ScrollView className="px-4">
        {comments.map((comment, key) => (
          <View
            key={key}
            className="bg-violet-50 mx-2 rounded-xl my-2 px-5 py-3"
          >
            <View className="flex flex-row items-center justify-between pb-2">
              <Text className="text-base">{comment.user}</Text>
              <Text className="text-sm text-right text-violet-400">
                {comment.date}
              </Text>
            </View>
            <Text className="text-gray-500">{comment.text}</Text>
            {/* icons */}
            <View className="flex flex-row space-x-8">
              <View className="flex flex-row items-end gap-x-1 pt-4">
                <Pressable
                  onPress={() =>
                    setComments((comments) => {
                      comments[key].like++;
                      alert(comments[key].like);
                      return comments;
                    })
                  }
                >
                  <Icon
                    name="thumb-up-off-alt"
                    type="MaterialIcons"
                    size={20}
                    color="rgb(107, 114, 128)"
                  />
                </Pressable>
                <Text className="text-gray-500">{comment.like}</Text>
              </View>
              <View className="flex flex-row items-end gap-x-1 pt-4">
                <Pressable>
                  <Icon
                    name="thumb-down-off-alt"
                    type="MaterialIcons"
                    size={20}
                    color="rgb(107, 114, 128)"
                    style={{ transform: [{ scaleX: -1 }] }}
                  />
                </Pressable>
                <Text className="text-gray-500">{comment.dislike}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View className="border-t px-8 py-5">
        <View className="flex flex-row justify-between mx-4">
          <Text className="text-gray-500">Donner une note:</Text>
          <View className="flex flex-row space-x-3">
            <View>
              <Star onPress={() => setRate(1)} on={rate > 0} />
            </View>
            <View>
              <Star onPress={() => setRate(2)} on={rate > 1} />
            </View>
            <View>
              <Star onPress={() => setRate(3)} on={rate > 2} />
            </View>
            <View>
              <Star onPress={() => setRate(4)} on={rate > 3} />
            </View>
            <View>
              <Star onPress={() => setRate(5)} on={rate > 4} />
            </View>
          </View>
        </View>
        {/* new comment view */}
        <View className="bg-violet-50 h-12 flex flex-row justify-between items-center rounded-3xl mt-4 px-4">
          <TextInput
            placeholder="Laisser un commentaire..."
            className=""
            onChangeText={setComment}
            value={comment}
          ></TextInput>
          <Pressable
            onPress={() => {
              setComment(comment);
              {
                comment
                  ? setComments((comments) => [
                      ...comments,
                      {
                        user: "Unknown",
                        date: "A l'instant",
                        text: comment,
                        like: 0,
                        dislike: 0,
                      },
                    ])
                  : null;
              }
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
