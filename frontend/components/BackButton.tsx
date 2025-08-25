// import Icons from "@/assets/icons";
// import { hp } from "@/helpers/common";
// import { Router } from "expo-router";
// import React from "react";
// import { Pressable } from "react-native";
// import { useSmartBack } from "@/hooks/useSmartBack";

// const BackButton = (
// //   {
// //   router,
// //   fallback = "/welcome",
// // }: {
// //   router: Router;
// //   fallback?: string;
// // }
// { fallback }: BackButtonProps
//  router,
// ) => {
//   const handleBack = () => {
//     if (router.canGoBack()) {
//       router.back();
//     } else {
//       router.replace(fallback);
//     }
//   };

//   return (
//     <Pressable
//       onPress={handleBack}
//       className="top-[0.5rem] mb-[2rem]"
//       style={{
//         height: hp(4),
//         width: hp(4),
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: hp(1),
//         backgroundColor: "#e6e6e6",
//       }}
//     >
//       <Icons name="arrowLeft" size="28" strokeWidth="0.5" />
//     </Pressable>
//   );
// };

// export default BackButton;

import Icons from "@/assets/icons";
import { hp } from "@/helpers/common";
import React from "react";
import { Pressable } from "react-native";
import { useSmartBack } from "@/hooks/useSmartBack";

type BackButtonProps = {
  fallback?: string;
};

const BackButton = ({ fallback }: BackButtonProps) => {
  const handleBack = useSmartBack(fallback);

  return (
    <Pressable
      onPress={handleBack}
      className="top-[0.5rem] mb-[2rem]"
      style={{
        height: hp(4),
        width: hp(4),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp(1),
        backgroundColor: "#e6e6e6",
      }}
    >
      <Icons name="arrowLeft" size="28" strokeWidth="0.5" />
    </Pressable>
  );
};

export default BackButton;
