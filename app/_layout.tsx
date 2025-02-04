import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="child/index"
        options={{
          headerShown: false,
          // animation: Platform.select({ android: "slide_from_bottom", native: "default" }),
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="child/secondchild"
        options={{
          headerShown: false,
          // animation: Platform.select({ android: "slide_from_bottom", native: "default" }),
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
