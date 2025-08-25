// import { AuthProvider } from "@/context/AuthProvider";
// import { DrawerProvider } from "@/context/DrawerContext"; // 👈 Add this
// import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { useEffect } from "react";
// import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
// import { useAuth } from "@clerk/clerk-expo";
// import { tokenCache } from "@clerk/clerk-expo/token-cache";
// import { useSegments, useRouter } from "expo-router";

// import "../global.css";

// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { SplashScreen, Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { StatusBar as RNStatusBar } from "react-native";
// import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";

// export default function RootLayout() {
//   const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
//     unsavedChangesWarning: false,
//   });
//   const segments = useSegments();
//   const router = useRouter();
//   const colorScheme = useColorScheme();

//   const { isLoaded, isSignedIn, userId } = useAuth();

//   useEffect(() => {
//     if (!isLoaded) return;
//     const inProtectedRoute = segments[0] === "(protected)";
//     if (isSignedIn && !inProtectedRoute) {
//       router.replace("/(protected)/(tabs)/home");
//     } else if (!isSignedIn && inProtectedRoute) {
//       router.replace("/(auth)/login");
//     }
//   }, [isSignedIn]);

//   const [fontsLoaded, error] = useFonts({
//     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//     "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//     "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//     "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//     "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
//     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//     "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//   });

//   useEffect(() => {
//     if (error) throw error;
//     if (fontsLoaded) SplashScreen.hideAsync();
//   }, [fontsLoaded, error]);

//   if (!fontsLoaded && !error) return null;

//   return (
//     <ConvexProvider client={convex}>
//       <ClerkProvider tokenCache={tokenCache}>
//         <ClerkLoaded>
//           <AuthRedirect />
//           <DrawerProvider>
//             {" "}
//             {/* 👈 Wrap everything inside here */}
//             <ThemeProvider
//               value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//             >
//               <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
//               <RNStatusBar
//                 barStyle={
//                   colorScheme === "dark" ? "light-content" : "dark-content"
//                 }
//                 backgroundColor={colorScheme === "dark" ? "#000" : "#f1f1f1"} // match your app background
//                 translucent={false}
//               />
//               <Stack
//                 screenOptions={{
//                   headerShown: false,
//                   animation: "fade_from_bottom",
//                 }}
//               />
//               {/* <StatusBar style="auto" /> */}
//             </ThemeProvider>
//           </DrawerProvider>
//         </ClerkLoaded>
//       </ClerkProvider>
//     </ConvexProvider>
//   );
// }

// function AuthRedirect() {
//   const { isLoaded, isSignedIn } = useAuth();
//   const segments = useSegments();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoaded) return;
//     const inProtectedRoute = segments[0] === "(protected)";
//     if (isSignedIn && !inProtectedRoute) {
//       router.replace("/(protected)/(tabs)/home");
//     } else if (!isSignedIn && inProtectedRoute) {
//       router.replace("/(auth)/login");
//     }
//   }, [isLoaded, isSignedIn]);

//   return null;
// }

import { AuthProvider } from "@/context/AuthProvider";
import { DrawerProvider } from "@/context/DrawerContext";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useEffect } from "react";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { useSegments, useRouter } from "expo-router";
import { useConvex } from "convex/react";

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

  function ConvexAuthSync() {
    const { getToken, isLoaded } = useAuth();
    const convex = useConvex();

    useEffect(() => {
      if (isLoaded) {
        const syncAuth = async () => {
          try {
            const token = await getToken();
            if (token) {
              convex.setAuth(token);
            } else {
              convex.clearAuth();
            }
          } catch (error) {
            console.error("Auth sync error:", error);
          }
        };
        syncAuth();
      }
    }, [getToken, isLoaded, convex]);

    return null;
  }

  return (
    // ✅ FIXED: ClerkProvider must wrap ConvexProvider
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} // Don't forget this!
    >
      <ConvexProvider client={convex}>
        <ClerkLoaded>
          {/* ✅ AuthRedirect will now work properly since it's inside ClerkProvider */}
          <ConvexAuthSync />
          <AuthRedirect />
          <DrawerProvider>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
              <RNStatusBar
                barStyle={
                  colorScheme === "dark" ? "light-content" : "dark-content"
                }
                backgroundColor={colorScheme === "dark" ? "#000" : "#f1f1f1"}
                translucent={false}
              />
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade_from_bottom",
                }}
              />
            </ThemeProvider>
          </DrawerProvider>
        </ClerkLoaded>
      </ConvexProvider>
    </ClerkProvider>
  );
}

function AuthRedirect() {
  // ✅ This useAuth() call is now correct because it's inside ClerkProvider
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inProtectedRoute = segments[0] === "(protected)";
    if (isSignedIn && !inProtectedRoute) {
      router.replace("/(protected)/(tabs)/home");
    } else if (!isSignedIn && inProtectedRoute) {
      router.replace("/(auth)/login");
    }
  }, [isLoaded, isSignedIn, segments]); // ✅ Added segments to dependencies

  return null;
}
