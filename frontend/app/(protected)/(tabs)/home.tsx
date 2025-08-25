import ScreenWrapper from "@/components/ScreenWrapper";
import SideDrawer from "@/components/SideDrawer";
import { hp, wp } from "@/helpers/common";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function Home() {
  const DRAWER_WIDTH = wp(75);
  const drawerProgress = useSharedValue(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const tasks = useQuery(api.task.get);

  const openDrawer = () => {
    setDrawerOpen(true);
    drawerProgress.value = withTiming(1, { duration: 300 });
  };

  const closeDrawer = () => {
    drawerProgress.value = withTiming(0, { duration: 300 });
    setTimeout(() => setDrawerOpen(false), 300); // optional delay to match animation
  };

  const drawerStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [-DRAWER_WIDTH, 0]
    );
    return {
      transform: [{ translateX }],
    };
  });

  const mainStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, DRAWER_WIDTH]
    );
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <ScreenWrapper>
      <Animated.View
        style={[
          {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: DRAWER_WIDTH,
            zIndex: 2,
          },
          drawerStyle,
        ]}
      >
        <SideDrawer />
      </Animated.View>

      <Animated.View style={[{ flex: 1, zIndex: 1 }, mainStyle]}>
        {drawerOpen && (
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </TouchableWithoutFeedback>
        )}
        <View style={{ paddingHorizontal: hp(2), position: "relative" }}>
          <TouchableOpacity
            onPress={openDrawer}
            className="absolute rounded-full top-[0.5rem] left-[0.75rem]"
            style={{
              height: hp(6),
              width: wp(12),
              zIndex: 3,
              overflow: "hidden",
            }}
          >
            {!drawerOpen && (
              <Image
                source={require("../../../assets/images/chigo1.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: hp(3) }}
              />
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>

      <StatusBar style="auto" />
    </ScreenWrapper>
  );
}

export default Home;
