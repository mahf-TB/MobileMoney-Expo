import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  FadeInDown,
} from "react-native-reanimated";

export default function OnBoardingScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient
        colors={["#E6E5F9", "#E5ECF5"]}
        className="flex-1 items-center justify-center"
      >
        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          className="flex items-center justify-center"
        >
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-44 h-44"
          />
          <Text
            style={{ fontSize: 32, marginBottom: 10 }}
            className="font-bold font-pblack text-purple-500 tracking-wide"
          >
            Fly Money
          </Text>
          <Animated.View
            entering={FadeInDown.delay(400).springify()}
            className="flex  items-center justify-center"
          >
            <TouchableOpacity
              onPress={() => router.push("/(routes)/Auth/LoginUser")}
              style={{ height: hp(7), width: wp(80) }}
              className="bg-purple-500 flex items-center justify-center rounded-full my-5"
            >
              <Text
                style={{ fontSize: hp(3) }}
                className="font-psemibold text-white tracking-wide"
              >
                Se connecter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ height: hp(7), width: wp(80) }}
              className=" rounded-full flex items-center justify-center border border-purple-500"
              onPress={() => router.push("/(routes)/Auth/Register")}
            >
              <Text className="text-purple-500 text-lg font-psemibold font-bold">
                Créer un compte
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </LinearGradient>
    </>
  );
}
