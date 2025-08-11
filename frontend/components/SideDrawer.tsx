import ScreenWrapper from "@/components/ScreenWrapper";
import { hp } from "@/helpers/common";
import React from "react";
import { Text, View } from "react-native";

const SideDrawer = () => {
  return (
    <ScreenWrapper>
      <View
        style={{
          paddingHorizontal: hp(2),
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* First Drawer List */}
        <View style={{ display: "flex", flexDirection: "column", gap: hp(2) }}>
          <Text>Profile</Text>
          <Text>Groups</Text>
          <Text>Bookmarks</Text>
          <Text>Topics</Text>
        </View>
        {/* Second Drawer List */}
        <View style={{ marginTop: hp(2) }}>
          <Text>Settings</Text>
          <Text>Help</Text>
          <Text>About</Text>
          <Text>Logout</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SideDrawer;
