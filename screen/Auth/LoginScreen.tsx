import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
  const [btnSpinner, setBtnSpinner] = useState(false);
  const [required, setRequired] = useState(false);
  const [userInfo, setUserInfo] = useState({
    emailOrNumber: "",
    password: "",
  });

  const handleSubmit = async () => {};

  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient colors={["#E6E5F9", "#E5ECF5"]} className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView>
            <View className=" flex items-center justify-center mx-4">
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-44 h-44 mt-10"
              />
              <Text
                style={{ fontSize: 22, marginBottom: 5 }}
                className="font-pblack text-purple-500 tracking-wide"
              >
                Fly Money
              </Text>
              <Text
                style={{ fontSize: 12, marginBottom: 25 }}
                className="font-pmedium text-gray-700 tracking-wide"
              >
                Login to your existing account of Fly Money
              </Text>
              <View className="flex items-center justify-center">
                <View className="flex items-center">
                  <FormField
                    title="Email"
                    icon="envelope"
                    required={required}
                    value={userInfo.emailOrNumber}
                    placeholder="mahefa@flymoney.com"
                    handleChangeText={(e) =>
                      setUserInfo({ ...userInfo, emailOrNumber: e })
                    }
                    otherStyles="mb-6"
                    keyboardType="email-address"
                  />

                  <FormField
                    title="Password"
                    icon="lock"
                    required={required}
                    value={userInfo.password}
                    placeholder="*****************"
                    handleChangeText={(e) =>
                      setUserInfo({ ...userInfo, password: e })
                    }
                    keyboardType="default"
                    otherStyles="mb-2"
                  />
                </View>
              </View>
              <View className="w-full">
                <Link
                  href={"forgot-pass"}
                  className=" text-xs font-psemibold text-right"
                >
                  Forgot password?
                </Link>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-purple-500 w-full flex justify-center items-center rounded-lg mt-5 mb-2 py-3"
              >
                {btnSpinner ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text
                    style={{ fontSize: 18 }}
                    className=" font-psemibold text-white tracking-wide"
                  >
                    Se connecter
                  </Text>
                )}
              </TouchableOpacity>
              <View className="w-full flex-row items-center justify-center gap-5 mb-4">
                <Link href={""}>
                  <FontAwesome color={"#9174D0"} name="google" size={24} />
                </Link>
                <FontAwesome color={"#9174D0"} name="facebook" size={24} />
              </View>

              <View className="w-full flex-row items-center justify-center">
                <Text>Don't have an account? </Text>
                <Link
                  href={"/(routes)/Auth/Register"}
                  className=" text-xs font-psemibold text-blue-500"
                >
                  Sign Up
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </>
  );
}
