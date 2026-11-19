import { router } from "expo-router";
import { Button } from "react-native";

export default function RootRoute() {
  return (
    <Button
      title="Go to Suspending"
      onPress={() => {
        router.push({
          pathname: "/suspending",
          params: {
            // Pass the current timestamp to serve as a key
            // to trigger a suspension on each navigation.
            at: Date.now().toFixed(0),
          },
        });
      }}
    />
  );
}
