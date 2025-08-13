import Icons from "@/assets/icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import { hp } from "@/helpers/common";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SideDrawer = () => {
  return (
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
          backgroundColor: "white",
        }}
      >
        {/* First Drawer List */}
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
          <Pressable
            className="flex items-center "
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="profile" size={hp(3)} color="#000" />
            <Text>Profile</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="group" size={hp(3)} color="#000" />
            <Text className="font-pbold">Groups</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="message" size={hp(3)} color="#000" />
            <Text>Messages</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="bookmark" size={hp(3)} color="#000" />
            <Text>Bookmarks</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="fire" size={hp(3)} color="#000" />
            <Text>Topics</Text>
          </Pressable>
        </View>
        {/* End of first List View Container */}
        {/* Second Drawer List */}
        <View style={{ marginTop: hp(2), gap: hp(1) }}>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="settings" size={hp(3)} color="#000" />

            <Text>Settings</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="question" size={hp(3)} color="#000" />
            <Text>Help</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="info" size={hp(3)} color="#000" />
            <Text>About</Text>
          </Pressable>
          <Pressable
            className="flex items-center"
            style={{ flexDirection: "row", gap: hp(1) }}
          >
            <Icons name="logout" size={hp(3)} color="#000" />
            <Text>Logout</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SideDrawer;
