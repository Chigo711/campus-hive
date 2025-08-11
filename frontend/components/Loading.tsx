import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loading = ({ size = "large", color }) => {
  return (
    <View className="justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
