import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { GameCard } from "./GameCard";

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game}></GameCard>
    </Animated.View>
  );
}
