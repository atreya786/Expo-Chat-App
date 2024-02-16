import React from "react";
import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css";

const _layout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default _layout;
