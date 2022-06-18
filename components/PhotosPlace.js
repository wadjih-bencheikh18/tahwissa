import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import mkm2 from "../images/makam2.png";
import mkm3 from "../images/makam3.png";

export default function PhotosEvent() {
  const pics = [mkm2, mkm3];
  return (
    <View className="h-full">
      <Text className="p-20 border-b">Description kda kda...</Text>

      {/* scrollzone */}
      <ScrollView className="mx-4">
        {/* pics */}
        <View className="pb-8">
          {/* one line (3pics) */}
          <View className="space-y-3 mt-8">
            {/* first row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
            </View>

            {/* second row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
            </View>
          </View>

          {/* REPET */}
          <View className="space-y-3 mt-3">
            {/* first row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
            </View>

            {/* second row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
            </View>
          </View>
          <View className="space-y-3 mt-3">
            {/* first row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
            </View>

            {/* second row */}
            <View className="flex flex-row justify-center space-x-6">
              <View className="space-y-3">
                <Image source={pics[1]} className="rounded-xl" />
                <Image source={pics[1]} className="rounded-xl" />
              </View>
              <View className="">
                <Image source={pics[0]} className="rounded-xl" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
