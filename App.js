import React from "react";
import { View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import PhotosEvent from "./components/PhotosEvent";

export default function App() {
  return (
    <TailwindProvider>
      <PhotosEvent />
    </TailwindProvider>
  );
}
