import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { hp, wp } from "@/helpers/common";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import Icons from "@/assets/icons";
import { useSignUp } from "@clerk/clerk-expo";
import Button from "@/components/Button";
// import { generate } from "generate-password";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const result = await signUp.create({ emailAddress, password, firstName, lastName });

  useEffect(() => {
    const generatePassword = (length = 12) => {
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }

      return password;
    };
    const newPassword = generatePassword();

    // setPassword(newPassword);
  }, []);

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    const [firstName, ...rest] = fullName.trim().split(" ");
    const lastName = rest.join(" ");

    if (!firstName) {
      setError("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!password || password.length < 8) {
      setError("Please enter a secure password with at least 8 characters.");
      setLoading(false);
      return;
    }
    if (!emailAddress) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);

      Alert.alert(
        "Check your email",
        "We've sent a verification code to your email address."
      );
    } catch (err: any) {
      console.error("Sign up error:", JSON.stringify(err, null, 2));
      setError(
        err.errors?.[0]?.message || "Something went wrong. Please try again."
      );
      Alert.alert("Error", err.errors?.[0]?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (!password || password.length < 8) {
        setError("Please enter a secure password with at least 8 characters.");
        setLoading(false);
        return;
      }

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        Alert.alert("Success", "Your account has been verified!");
        router.replace("/(protected)/(tabs)/home");
      } else {
        setError("Verification failed. Please try again.");
        console.error(
          "Verification incomplete:",
          JSON.stringify(signUpAttempt, null, 2)
        );
      }
    } catch (err: any) {
      console.error("Verification error:", JSON.stringify(err, null, 2));
      setError(err.errors?.[0]?.message || "Invalid verification code");
      Alert.alert("Error", err.errors?.[0]?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <ScreenWrapper>
        <View style={{ paddingHorizontal: wp(5) }}>
          <Stack.Screen options={{ headerShown: false }} />
          <BackButton router={router} />
          {/* <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: wp(5),
          }}
        > */}
          <View style={{ gap: 30 }}>
            <View>
              <Text
                className="font-pbold text-textColor"
                style={{ fontSize: hp(3.5) }}
              >
                Verify Your Email
              </Text>
              <Text
                className="text-textColor"
                style={{ fontSize: hp(1.8), marginTop: 10 }}
              >
                Enter the verification code sent to {emailAddress}
              </Text>
            </View>

            <Input
              value={code}
              placeholder="Enter verification code"
              onChangeText={setCode}
              keyboardType="number-pad"
            />

            {error ? (
              <Text
                className="text-red-500 font-pmedium"
                style={{ fontSize: hp(1.8) }}
              >
                {error}
              </Text>
            ) : null}
            <View className="items-center w-full">
              <Button
                title="Verify Email"
                loading={loading}
                onPress={onVerifyPress}
                className="justify-center items-center bg-buttonColor"
                buttonStyle={{
                  height: hp(6.6),
                  borderRadius: 18,
                  width: wp(80),
                }}
                textStyle={{
                  fontSize: hp(2.3),
                  color: "#fff",
                }}
                fontFamily="pmedium"
              />
            </View>
            {/* Back to sign up */}
            <TouchableOpacity onPress={() => setPendingVerification(false)}>
              <Text className="text-primary font-psemibold text-center">
                Back to sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <Stack.Screen options={{ headerShown: false }} />
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
            Let's
          </Text>
          <Text
            className="font-pbold text-textColor"
            style={{ fontSize: hp(4) }}
          >
            Get Started
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <Text style={{ fontSize: hp(1.5) }} className="text-textColor">
            Please fill in your details to create an account
          </Text>

          <Input
            icons={
              <Icons
                name="person"
                strokeWidth="1.5"
                // color={theme.color.textLight}
              />
            }
            placeHolder="Enter your full name"
            // value={name}
            // onChangeText={(n) => setName(n)}
            value={fullName}
            onChangeText={setFullName}
          />

          <Input
            icons={
              <Icons
                name="envelope"
                strokeWidth="1.5"
                // color={theme.color.textLight}
              />
            }
            placeHolder="Enter your email"
            value={emailAddress}
            onChangeText={(e) => setEmailAddress(e)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            icons={
              <Icons
                name="padlock"
                strokeWidth="1.5"
                // color={theme.color.textLight}
              />
            }
            placeHolder="Enter your password"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            value={password}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icons
                  name={showPassword ? "eyeSlash" : "eye"}
                  strokeWidth="1.5"
                  // color={theme.color.textLight}
                />
              </TouchableOpacity>
            }
          />
          {error ? (
            <Text
              className="text-red-500 font-pmedium"
              style={{ fontSize: hp(1.8) }}
            >
              {String(error)}
            </Text>
          ) : null}
          <View className="items-center w-full">
            <Button
              title="Submit"
              // loading={loading}
              // onPress={() =>
              //   Alert.alert("Success", "Account created successfully!")
              // }
              onPress={onSignUpPress}
              className="justify-center items-center bg-buttonColor w-full"
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
          </View>
        </View>
        {/* <SocialButtons /> */}
        <View className="flex-row justify-center items-center gap-2">
          <Text className="font-psemibold">Already have an account?</Text>
          <Pressable onPress={() => router.replace("/login")}>
            <Text
              className="font-psemibold text-primary"
              style={{ fontSize: hp(1.6) }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

{
  /* <BackButton router={useRouter()} /> */
}
