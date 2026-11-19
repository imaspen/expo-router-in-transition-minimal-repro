import { router, useLocalSearchParams } from "expo-router";
import { use } from "react";
import { Button, Text } from "react-native";

// Generate a stable promise for a given string to simulate a suspending screen
const promises = new Map<string, Promise<void>>();
function getPromise(at: string): Promise<void> {
  const promise =
    promises.get(at) ?? new Promise((resolve) => setTimeout(resolve, 3000));
  promises.set(at, promise);
  return promise;
}

export default function SuspendingRoute() {
  const { at } = useLocalSearchParams<{ at?: string }>();
  use(getPromise(at ?? ""));

  const atTime = at ? new Date(Number(at)).toLocaleString() : "";
  const renderTime = new Date().toLocaleString();

  return (
    <>
      <Text>
        Rendered {atTime} at {renderTime}
      </Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </>
  );
}
