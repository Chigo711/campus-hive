import { useDrawer } from "@/context/DrawerContext";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import Icons from "@/assets/icons/index";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Animated from "react-native-reanimated";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { animatedStyle } = useDrawer(); // ✅ use animatedStyle from context
  const darkColor = "#f2f2f2";
  const lightColor = "#1a1a1a";

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icons
                  name="homeBold"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ) : (
                <Icons
                  name="home"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ),
          }}
        />

        <Tabs.Screen
          name="market"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icons
                  name="bagBold"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ) : (
                <Icons
                  name="bag"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ),
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icons
                  name="exploreBold"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ) : (
                <Icons
                  name="explore"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ),
          }}
        />

        <Tabs.Screen
          name="groups"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icons
                  name="groupBold"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ) : (
                <Icons
                  name="group"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ),
          }}
        />

        <Tabs.Screen
          name="message"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icons
                  name="messageBold"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ) : (
                <Icons
                  name="message"
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              ),
          }}
        />
      </Tabs>
    </Animated.View>
  );
}
