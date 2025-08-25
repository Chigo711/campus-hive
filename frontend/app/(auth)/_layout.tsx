import { Redirect, Stack, useSegments } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const segment = useSegments();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}
