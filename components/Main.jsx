import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { Logo } from "./Logo";
import { AnimatedGameCard } from "./AnimatedGameCard";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons";
import Screen from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
