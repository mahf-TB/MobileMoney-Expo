import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import WelcomeScreen from "@/screen/WelcomeScreen";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    // <WelcomeScreen />
    <Redirect  href={"/(routes)/Welcome"}/>
  );
}
