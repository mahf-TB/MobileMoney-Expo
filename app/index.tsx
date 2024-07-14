import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute object-cover"
        source={require("@/assets/images/fondMobile.jpg")}
      />

      <LinearGradient
        colors={["#5033B4", "#18181b"]}
        style={{ width: wp(100), height: hp(100) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12"
      >
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center"
        >
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-44 h-44"
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="font-bold text-white tracking-wide"
          >
            Best <Text className="text-purple-500">Mobile Money</Text>{" "}
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="font-bold text-white tracking-wide"
          >
            For you
          </Text>
          <View className="px-5">
            {/* <Text className="text-xs text-gray-200">
              La solution incontournable pour gérer vos paiements Mobile Money
            </Text> */}
            <Text className="text-xs text-gray-200">
              De l'envoi à la réception, en passant par les retraits et les
              dépôts, notre solution{" "}
              <Text className="bg-slate-50/10 border border-slate-50 text-purple-500 px-5 py-1 mx-2 font-mono rounded-md inline-flex items-center text-xs gap-1 uppercase">
                FlyMoney
              </Text>{" "}
              simplifie et sécurise toutes vos transactions Mobile Money.
              Profitez d'une gestion financière optimale avec notre plateforme
              intégrée et conforme aux normes fiscales mondiales.
            </Text>
          </View>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400).springify()}>
          <TouchableOpacity
            onPress={() => router.push("/(routes)/onBoarding")}
            style={{ height: hp(7), width: wp(70) }}
            className="bg-purple-500 flex flex-row items-center justify-center mx-auto rounded-full mt-5 border-2 border-white"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold text-white tracking-wide mr-5"
            >
              Get Started
           </Text>
            <Ionicons name="rocket" size={23} color={"#FFF"} className="ml-5" />
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
