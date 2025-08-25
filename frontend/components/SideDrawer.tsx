import Icons from "@/assets/icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import { hp } from "@/helpers/common";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
// import {  } from "@/context/theme-context";
import { ThemeProvider, useTheme } from "@/context/theme-context";

const SideDrawer = () => {
  const colorScheme = useColorScheme();
  const darkColor = "#f2f2f2";
  const lightColor = "#1a1a1a";

  const { isDark } = useTheme();

  return (
    <ThemeProvider>
      <ScreenWrapper>
        <View
          style={{
            paddingHorizontal: hp(3),
            paddingVertical: hp(3),
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
          className={`flex-1 ${isDark ? "bg-[#1A1C1E]" : "bg-[#ffffff]"}`}
        >
          {/* First Drawer List */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: hp(2),
              // borderTopWidth: hp(0.1),
              borderBottomWidth: hp(0.1),
              borderColor: "#ccc",
              paddingVertical: hp(4),
            }}
          >
            <Pressable
              className="flex items-center "
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="profile"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <ThemedText type="title" style={{ fontSize: hp(2.5) }}>
                <Text>Profile</Text>
              </ThemedText>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="group"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <ThemedText type="title" style={{ fontSize: hp(2.5) }}>
                <Text>Groups</Text>
              </ThemedText>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="message"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <ThemedText type="title" style={{ fontSize: hp(2.5) }}>
                <Text>Messages</Text>
              </ThemedText>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="bookmark"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <ThemedText type="title" style={{ fontSize: hp(2.5) }}>
                <Text>Bookmarks</Text>
              </ThemedText>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="fire"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <ThemedText type="title" style={{ fontSize: hp(2.5) }}>
                <Text>Topics</Text>
              </ThemedText>
            </Pressable>
          </View>
          {/* End of first List View Container */}
          {/* Second Drawer List */}
          <View style={{ marginTop: hp(2), gap: hp(1) }}>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="settings"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />

              <Text>Settings</Text>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="question"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <Text>Help</Text>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="info"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <Text>About</Text>
            </Pressable>
            <Pressable
              className="flex items-center"
              style={{ flexDirection: "row", gap: hp(1) }}
            >
              <Icons
                name="logout"
                size={hp(3)}
                color={colorScheme === "dark" ? darkColor : lightColor}
              />
              <Text>Logout</Text>
            </Pressable>
          </View>
        </View>
      </ScreenWrapper>
    </ThemeProvider>
  );
};

export default SideDrawer;
