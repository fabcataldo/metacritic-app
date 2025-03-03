import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 p-4 rounded-xl bg-slate-500/10">
        <View key={game.slug} className="flex-row gap-4">
          <Image source={{ uri: game.image }} style={styles.image}></Image>
          <View class="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.name}
            </Text>
            <Score score={game.rating} maxScore={100}></Score>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
