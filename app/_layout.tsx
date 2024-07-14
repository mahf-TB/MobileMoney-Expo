import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import OnBoarding from "./(routes)/onBoarding";

export default function RootLayout() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <View></View>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(routes)/onBoarding/index" />
          <Stack.Screen name="(routes)/welcome/index" />
          {/* Add more screens here */}
        </Stack>
      )}
    </>
  );
}
