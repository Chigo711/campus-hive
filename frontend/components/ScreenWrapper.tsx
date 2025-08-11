import React from "react";
import { View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const ScreenWrapper = ({ children }) => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const backgroundColor = colorScheme === "dark" ? "#000" : "#f0f0f0";
  const textColor = colorScheme === "dark" ? "#fff" : "#000";

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30; // Fallback to 20 if top is 0
  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: backgroundColor }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
