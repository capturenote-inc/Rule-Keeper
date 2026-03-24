// Agent 2 — Horizontal scroll of recently played games
import { View, Text, FlatList } from "react-native";
import GameCard, { type GameCardData } from "./GameCard";
import type { ThemeColors } from "../../lib/theme";

const MOCK_RECENT: GameCardData[] = [
  { id: "r1", emoji: "🏰", name: "Catan", category: "Strategy", players: "3-4", saved: true },
  { id: "r2", emoji: "🕵️", name: "Clue", category: "Mystery", players: "2-6", saved: true },
  { id: "r3", emoji: "🐉", name: "Gloomhaven", category: "Adventure", players: "1-4", saved: true },
  { id: "r4", emoji: "🌍", name: "Pandemic", category: "Co-op", players: "2-4", saved: true },
];

interface RecentlyPlayedProps {
  colors: ThemeColors;
}

export default function RecentlyPlayed({ colors }: RecentlyPlayedProps) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Nunito_800ExtraBold",
          fontSize: 18,
          color: colors.text,
          marginHorizontal: 16,
          marginBottom: 12,
        }}
      >
        Recently played
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
        data={MOCK_RECENT}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard game={item} colors={colors} width={140} />
        )}
      />
    </View>
  );
}
