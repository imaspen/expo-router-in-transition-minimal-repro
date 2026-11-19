import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerTransparent: false }}>
        <Stack.Screen name="index" options={{ title: "Root" }} />
        <Stack.Screen name="suspending" options={{ title: "Suspending" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
