import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import Screen from "../../components/Screen";
const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link href="/" asChild>
          <StyledPressable className={`active:opacity-80`}>
            <HomeIcon></HomeIcon>
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold nb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Non quis sint ea reprehenderit deserunt commodo irure ex sit ad
          fugiat. Veniam sit ad consectetur amet nostrud officia excepteur
          fugiat non ea. Velit ad id laboris deserunt excepteur. Enim mollit
          aliqua irure voluptate cillum laboris aliquip culpa voluptate
          pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Sit magna eu excepteur aliqua ea in minim. Quis excepteur do tempor eu
          non eiusmod reprehenderit sit nostrud qui dolore sunt est. Laboris ea
          et nulla deserunt.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>

        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>

        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>
      </ScrollView>
    </Screen>
  );
}
