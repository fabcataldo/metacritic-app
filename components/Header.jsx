import { Pressable, View } from "react-native";
import { CircleInfoIcon, LogoutIcon } from "./Icons";
import { Logo } from "./Logo";
import { Link, Stack, useRouter } from "expo-router";
import { useAuth } from "../context/providers/AuthProvider";
import { useApiServices } from "../context/ApiContext";

export default function Header() {
  const { logout } = useAuth();
  const apiServices = useApiServices();
  const router = useRouter();

  
  const logoutUser = () => {
    console.log('apiServices')
  console.log(apiServices)
    try {
      const loginResponse = apiServices.logout();
      if (!!loginResponse) {
        logout(loginResponse);
        router.replace("/login");
      }
    } catch (error) {
      //TIRAR TOAST DE ERROR
      console.log(error);
    }
  };
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <>
              <Link href="/about" asChild className="pr-3">
                <Pressable>
                  {({ pressed }) => (
                    <CircleInfoIcon
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    ></CircleInfoIcon>
                  )}
                </Pressable>
              </Link>
              <Pressable onPress={logoutUser} className="pr-2">
                {({ pressed }) => (
                  <LogoutIcon
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  ></LogoutIcon>
                )}
              </Pressable>
            </>
          ),
        }}
      />
    </View>
  );
}
