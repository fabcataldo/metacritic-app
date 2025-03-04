import { HomeIcon, InfoIcon } from "./Icons";
import { Tabs } from "expo-router";
import { useAuth } from "../context/providers/AuthProvider";
import { useApiServices } from "../context/ApiContext";

export default function TabsComponent() {
  const { isAuthenticated } = useAuth();
  const apiServices = useApiServices();
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarStyle:
            isAuthenticated || apiServices.getUserStorage()
              ? { backgroundColor: "#000" }
              : { display: "none" },
          tabBarActiveTintColor: "yellow",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: isAuthenticated,
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: isAuthenticated,
            tabBarIcon: ({ color }) => <InfoIcon color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
