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
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />

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
            onPress={() => router.push("/(tabs)/home")} //This should routing to Sign up, we have home there for now till the authentication is done.
            buttonStyle={{
              marginHorizontal: wp(3),
              height: hp(6.6),
              borderCurve: "continuous",
              borderRadius: 18,
              width: wp(80),
            }}
            textStyle={{
              fontSize: hp(2.3),
              color: "#fff",
            }}
            fontFamily="pmedium"
          />

          <View className="flex-row justify-center items-center gap-2">
            <Text
              className="text-center font-psemibold"
              style={{ fontSize: hp(1.6) }}
            >
              Already have and account?
            </Text>
            <Pressable onPress={() => router.push("/(auth)/signIn")}>
              <Text
                className="font-psemibold text-primary"
                style={{ fontSize: hp(1.6) }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
        {/*    THE ADD CONTENT BUTTON WILL GO HERE, RIGHT AT THE BOTTOM OF THE SCREEN */}
        {/*    <Button></Button>*/}
      </View>
    </ScreenWrapper>
  );
};

export default App;
