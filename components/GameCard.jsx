import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
    >
      <Image source={{ uri: game.image }} style={styles.image}></Image>
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.name}
        </Text>
        <Score score={game.rating} maxScore={100}></Score>
      </View>
    </View>
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
