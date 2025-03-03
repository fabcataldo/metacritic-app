import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import Screen from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <View>
          <Text className="text-white font-bold mb-8 text-2xl">
            Detalle del juego {id}
          </Text>
          <Link href="/" className="text-blue-500">
            Volver atrás
          </Link>
        </View>
      </View>
    </Screen>
  );
}
