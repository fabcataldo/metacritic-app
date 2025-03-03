import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  ></CircleInfoIcon>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
