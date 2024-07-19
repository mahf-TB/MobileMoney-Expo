import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import OnBoarding from "./(routes)/onBoarding";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf") ,
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Semibold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Black": require("@/assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(()=>{
    if (error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <>
      {isLoggedIn ? (
        <View></View>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/onBoarding/index" />
          <Stack.Screen name="(routes)/Auth/LoginUser" />
          <Stack.Screen name="(routes)/Auth/Register" />
          <Stack.Screen name="(routes)/Auth/VerifyAccount" />
          {/* Add more screens here */}
        </Stack>
      )}
    </>
  );
}
