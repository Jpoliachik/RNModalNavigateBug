import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Index Screen</Text>
      <Button title="Go to Child Screen" onPress={() => router.navigate("/child")} />
    </View>
  );
}
