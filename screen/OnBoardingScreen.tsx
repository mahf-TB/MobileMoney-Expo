import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
export default function OnBoardingScreen() {
  return (
    <LinearGradient
      colors={["#E6E5F9", "#E5ECF5"]}
      className="flex-1 items-center justify-center"
    >
      <View>
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-44 h-44"
        />
        <View>

        </View>
        <TouchableOpacity className="p-2 bg-purple-500 rounded-md flex items-center justify-center"
        onPress={()=>router.push("/")}>
          <Text className="text-white text-xl font-bold">Retour dans debut</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
