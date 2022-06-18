import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import AvisPlace from "./components/AvisPlace";
import PhotosPlace from "./components/PhotosPlace";

export default function App() {
  return (
    <TailwindProvider>
      <AvisPlace />
    </TailwindProvider>
  );
}
