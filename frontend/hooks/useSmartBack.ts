// hooks/useSmartBack.ts
import { useRouter, useSegments } from "expo-router";

export const useSmartBack = (fallback?: string) => {
  const router = useRouter();
  const segments = useSegments();

  return () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      const current = segments.join("/");
      const fallbackRoute = fallback ?? "/welcome";

      // Optional: add more route-specific logic here
      if (["sign-in", "sign-up", "welcome"].includes(current)) {
        router.replace(fallbackRoute);
      } else {
        // Stay put or show a toast if needed
        router.replace(fallbackRoute);
      }
    }
  };
};
