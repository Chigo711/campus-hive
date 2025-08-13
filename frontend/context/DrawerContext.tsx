// import { wp } from "@/helpers/common";
// import React, { createContext, useContext, useRef, useState } from "react";
// import { Animated } from "react-native";

// const DRAWER_WIDTH = wp(75);

// const DrawerContext = createContext(null);

// export const DrawerProvider = ({ children }) => {
//   const drawerAnim = useRef(new Animated.Value(0)).current;
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const openDrawer = () => {
//     setDrawerOpen(true);
//     Animated.timing(drawerAnim, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const closeDrawer = () => {
//     Animated.timing(drawerAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => setDrawerOpen(false));
//   };

//   const mainTranslateX = drawerAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, DRAWER_WIDTH],
//   });

//   return (
//     <DrawerContext.Provider
//       value={{ drawerOpen, openDrawer, closeDrawer, mainTranslateX }}
//     >
//       {children}
//     </DrawerContext.Provider>
//   );
// };

// export const useDrawer = () => useContext(DrawerContext);

import { wp } from "@/helpers/common";
import React, { createContext, useContext, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const DRAWER_WIDTH = wp(65);

const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {
  const drawerProgress = useSharedValue(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
    drawerProgress.value = withTiming(1, { duration: 300 });
  };

  const closeDrawer = () => {
    drawerProgress.value = withTiming(0, { duration: 300 }, () => {
      setDrawerOpen(false);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: drawerProgress.value * DRAWER_WIDTH }],
  }));

  return (
    <DrawerContext.Provider
      value={{ drawerOpen, openDrawer, closeDrawer, animatedStyle }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
