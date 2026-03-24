// Agent 2 — 2-column grid of popular games
import { View, Text } from "react-native";
import GameCard, { type GameCardData } from "./GameCard";
import type { ThemeColors } from "../../lib/theme";

const MOCK_POPULAR: GameCardData[] = [
  { id: "p1", emoji: "⚔️", name: "Risk", category: "Strategy", players: "2-6" },
  { id: "p2", emoji: "🧩", name: "Azul", category: "Puzzle", players: "2-4", saved: true },
  { id: "p3", emoji: "🚂", name: "Ticket to Ride", category: "Family", players: "2-5" },
  { id: "p4", emoji: "👻", name: "Mysterium", category: "Co-op", players: "2-7" },
];

interface PopularGamesProps {
  colors: ThemeColors;
}

export default function PopularGames({ colors }: PopularGamesProps) {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text
        style={{
          fontFamily: "Nunito_800ExtraBold",
          fontSize: 18,
          color: colors.text,
          marginBottom: 12,
        }}
      >
        Popular games
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {MOCK_POPULAR.map((game) => (
          <View key={game.id} style={{ width: "48%" }}>
            <GameCard game={game} colors={colors} />
          </View>
        ))}
      </View>
    </View>
  );
}
