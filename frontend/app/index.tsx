import ScreenWrapper from "@/components/ScreenWrapper";
import { hp, wp } from "@/helpers/common";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Button from "../components/Button";
// import assets from "../assets";
import { Stack, useRouter } from "expo-router";
import images from "../assets/images/image";
const App = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <ScreenWrapper>
      {/* <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      /> */}

      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View
        className="container flex-1  justify-around "
        style={{ paddingHorizontal: wp(2) }}
      >
        <Image
          source={images.chatting01}
          className="self-center"
          style={{ height: hp(45), width: wp(80) }}
        />
        <View className="gap-2">
          <Text
            className="font-pextrabold text-center  text-primary"
            style={{ fontSize: hp(4) }}
          >
            Welcome to Campus Hive
          </Text>
          <Text
            className="text-center font-pregular"
            style={{ paddingHorizontal: wp(10), fontSize: hp(2) }}
          >
            The square where stories spark.
          </Text>
        </View>
        <View className="items-center flex-col gap-[2rem] w-full">
          <Button
            className="justify-center items-center  bg-buttonColor w-full"
            title="Get Started"
            onPress={() => {
              router.push("/(auth)/sign-up");
            }} //This should routing to Sign up, we have home there for now till the authentication is done.
            buttonStyle={{
              marginHorizontal: wp(3),
              height: hp(6.6),
              borderCurve: "continuous",
              borderRadius: 18,
              width: wp(80),
              marginBottom: hp(6),
            }}
            textStyle={{
              fontSize: hp(2.3),
              color: "#fff",
            }}
            fontFamily="pmedium"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default App;
