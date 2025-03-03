import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import Screen from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameInfo?.name ? gameInfo.name : "Game Detail",
          headerRight: () => {},
        }}
      ></Stack.Screen>
      <View className="flex-1 justify-center items-center">
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"}></ActivityIndicator>
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{
                  uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
                }}
                style={{ width: 215, height: 294 }}
              ></Image>
              <Score score={gameInfo.score} maxScore={100}></Score>
              <Text className="text-center text-white font-bold text-xl">
                {gameInfo.name}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-xl">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
