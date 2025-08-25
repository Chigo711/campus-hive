import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeft = ({ size, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      class="size-6"
      height={size || 24}
      width={size || 24}
      stroke={color || "currentColor"}
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </Svg>
  );
};

export default ArrowLeft;
