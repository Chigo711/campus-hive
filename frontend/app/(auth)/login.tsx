import Icons from "@/assets/icons";
// import { useAuth } from "@/context/AuthProvider";
import { hp, wp } from "@/helpers/common";
import { Link } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, TextInput, View, Text, Pressable } from "react-native";
import Input from "@/components/Input";
import theme from "@/constants/theme";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useEffect } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import Button from "@/components/Button";
import { useSignIn, useSSO } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";

export default function LoginScreen() {
  // const { login } = useAuth();
  const { signIn, setActive, isLoaded } = useSignIn();

  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO();

  // const handleLogin = async () => {
  //   const success = await login(email, password);
  //   if (!success) Alert.alert("Error", "Invalid credentials");
  // };

  const colorScheme = useColorScheme();
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const darkColor = "#f2f2f2";
  const lightColor = "#555";

  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    // <Stack.screen options={{ headerShown: false }}>
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScreenWrapper>
        <View
          style={{
            flex: 1,
            gap: 45,
            paddingHorizontal: wp(5),
          }}
        >
          <BackButton router={router} />
          <View>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Hey,
            </Text>
            <Text
              className="font-pbold text-textColor"
              style={{ fontSize: hp(4) }}
            >
              Welcome Back
            </Text>
          </View>
          {/* LOGIN FORM */}
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: hp(1.5) }} className="text-textColor">
              Please Login to continue
            </Text>
            <Input
              icons={
                <Icons
                  name="envelope"
                  strokeWidth="1.5"
                  // color={theme.color.textLight}
                  size={hp(3)}
                  color={colorScheme === "dark" ? darkColor : lightColor}
                  className="absolute top-1 left-2"
                />
              }
              placeHolder="Enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              className="font-pregular flex-1 justify-center items-center"
            />
            <Input
              // emailRef.current = value;hhh
              icons={
                <Icons
                  name="padlock"
                  strokeWidth="1.5"
                  // color={theme.color.textLight}
                  size={hp(3)}
                  color={colorScheme === "dark" ? darkColor : lightColor}
                />
              }
              placeHolder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(password) => setPassword(password)}
              className="font-pregular flex-1 justify-center items-center"
            />
            <Text className="text-right font-psemibold text-textColor">
              Forgot Password ?
            </Text>
            <View className="items-center w-full">
              <Button
                title="Login"
                loading={loading}
                // onPress={onSubmit}
                onPress={onSignInPress}
                className="justify-center items-center  bg-buttonColor w-full"
                buttonStyle={{
                  marginHorizontal: wp(3),
                  height: hp(6.6),
                  width: wp(80),
                  borderCurve: "continuous",
                  borderRadius: 18,
                }}
                textStyle={{
                  fontSize: hp(2.3),
                  color: "#fff",
                }}
                fontFamily="pmedium"
              />
            </View>
            {/* Don't have an account sign-up */}
            <View className="flex items-center flex-row  mt-[4rem] w-full  justify-center ">
              <Text className="font-psemibold flex items-center justify-center">
                Don't have an account?{" "}
              </Text>
              <Pressable onPress={() => router.replace("/(auth)/sign-up")}>
                <Text className="font-psemibold text-primary">Sign up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
}

// </Stack.screen>
// }

//  <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
//   <TextInput
//     placeholder="ALU Email (@alustudent.com)"
//     value={email}
//     onChangeText={setEmail}
//     keyboardType="email-address"
//     autoCapitalize="none"
//     style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
//   />
//   <TextInput
//     placeholder="Password"
//     secureTextEntry
//     value={password}
//     onChangeText={setPassword}
//     style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
//   />
//   <Button title="Log In" onPress={handleLogin} />
//   <Link
//     href="/(auth)/signup"
//     style={{ marginTop: 15, textAlign: "center" }}
//   >
//     <Text>Don't have an account? Sign up</Text>
//   </Link>
// </View>
// async function onSubmit() {
//   // Simulate a network request
//   if (!email || !password) {
//     Alert.alert("Sign In", "Fill all the fields!!!");
//   }

//   const trimmedEmail = email.trim();
//   const trimmedPassword = password.trim();
//   setLoading(true);

//   // const { error } = await supabase.auth.signInWithPassword({
//   //   email: trimmedEmail,
//   //   password: trimmedPassword,
//   // });

//   setLoading(false);

//   console.log("error:", error);

//   if (error) {
//     Alert.alert("Sign In", error.message);
//   }
//   return;
// }
// const onSubmit = async () => {
// if (!email || !password) {
//   Alert.alert("Sign In", "Fill all the fields!!!");
//   return;
// }
