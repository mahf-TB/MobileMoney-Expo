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
  
export default function RegisterScreen() {
    const [btnSpinner, setBtnSpinner] = useState(false);
  const [required, setRequired] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name:"",
    telephone : "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    router.push("/(routes)/Auth/VerifyAccount")
  };

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
                className="w-24 h-24 mt-10"
              />
              <Text
                style={{ fontSize: 18, marginBottom: 5 }}
                className="font-pblack text-purple-500 tracking-wide"
              >
                Fly Money
              </Text>
              <Text
                style={{ fontSize: 10, marginBottom: 25 }}
                className="font-pmedium text-gray-700 tracking-wide"
              >
                Create your an account to Fly Money to get all features
              </Text>
              <View className="flex items-center justify-center">
                <View className="flex items-center">
                  <FormField
                    title="Noms"
                    icon="user"
                    required={required}
                    value={userInfo.name}
                    placeholder="RAKOTOZAFY Alaxise"
                    handleChangeText={(e) =>
                      setUserInfo({ ...userInfo, name: e })
                    }
                    otherStyles="mb-6"
                    keyboardType="default"
                  />
                  <FormField
                    title="Phone"
                    icon="phone"
                    required={required}
                    value={userInfo.telephone}
                    placeholder="+261330000000"
                    handleChangeText={(e) =>
                      setUserInfo({ ...userInfo, telephone: e })
                    }
                    otherStyles="mb-6"
                    keyboardType="default"
                  />
                  <FormField
                    title="Email"
                    icon="envelope"
                    required={required}
                    value={userInfo.email}
                    placeholder="mahefa@flymoney.com"
                    handleChangeText={(e) =>
                      setUserInfo({ ...userInfo, email: e })
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
                    Enregister
                  </Text>
                )}
              </TouchableOpacity>
              {/* <View className="w-full flex-row items-center justify-center gap-5 mb-4">
                <Link href={""}>
                  <FontAwesome color={"#9174D0"} name="google" size={24} />
                </Link>
                <FontAwesome color={"#9174D0"} name="facebook" size={24} />
              </View> */}

              <View className="w-full flex-row items-center justify-center">
                <Text>Allready have an account? </Text>
                <Link
                  href={"/(routes)/Auth/LoginUser"}
                  className=" text-xs font-psemibold text-blue-500"
                >
                  Sign In
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </>
  );
}
