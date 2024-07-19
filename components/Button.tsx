import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Button() {
  return (
    <TouchableOpacity
      onPress={() => router.push("/(routes)/Auth/login")}
      style={{ height: hp(7), width: wp(80) }}
      className="bg-purple-500 flex items-center justify-center rounded-md my-5"
    >
      <Text
        style={{ fontSize: hp(3) }}
        className="font-pmedium text-white tracking-wide mr-5"
      >
        Login
      </Text>
    </TouchableOpacity>
  );
}
