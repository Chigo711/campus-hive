import { AuthProvider } from "@/context/AuthProvider";
import { DrawerProvider } from "@/context/DrawerContext"; // 👈 Add this
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useEffect } from "react";
import "../global.css";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
  });
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <ConvexProvider client={convex}>
      <AuthProvider>
        <DrawerProvider>
          {" "}
          {/* 👈 Wrap everything inside here */}
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <RNStatusBar
              barStyle={
                colorScheme === "dark" ? "light-content" : "dark-content"
              }
              backgroundColor={colorScheme === "dark" ? "#000" : "#fff"} // match your app background
              translucent={false}
            />
            <Stack
              screenOptions={{
                headerShown: false,
                animation: "fade_from_bottom",
              }}
            />
            {/* <StatusBar style="auto" /> */}
          </ThemeProvider>
        </DrawerProvider>
      </AuthProvider>
    </ConvexProvider>
  );
}
