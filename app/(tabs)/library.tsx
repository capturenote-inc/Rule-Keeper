// Agent 3 — Library screen: category pills, search, 2-column game grid
import { useState, useMemo } from "react";
import { View, Text, FlatList, Pressable, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../lib/theme";
import GameCard, { type GameCardData } from "../../components/dashboard/GameCard";
import CategoryPills from "../../components/library/CategoryPills";
import SearchBar from "../../components/library/SearchBar";

// Mock data — 8 games
const MOCK_GAMES: GameCardData[] = [
  { id: "1", emoji: "\u{1F3F0}", name: "Catan", category: "Strategy", players: "3-4", saved: true },
  { id: "2", emoji: "\u{1F985}", name: "Wingspan", category: "Strategy", players: "1-5", saved: true },
  { id: "3", emoji: "\u{1F682}", name: "Ticket to Ride", category: "Family", players: "2-5", saved: false },
  { id: "4", emoji: "\u{1F48E}", name: "Azul", category: "Strategy", players: "2-4", saved: true },
  { id: "5", emoji: "\u{1F9EA}", name: "Pandemic", category: "Strategy", players: "2-4", saved: false },
  { id: "6", emoji: "\u{1F575}", name: "Codenames", category: "Party", players: "2-8", saved: true },
  { id: "7", emoji: "\u{1FA90}", name: "Terraforming Mars", category: "Strategy", players: "1-5", saved: false },
  { id: "8", emoji: "\u{1F3DB}", name: "7 Wonders", category: "Family", players: "2-7", saved: false },
];

export default function LibraryScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? theme.dark : theme.light;
  const insets = useSafeAreaInsets();

  const [activeCategory, setActiveCategory] = useState("All games");
  const [search, setSearch] = useState("");

  // Filter games by category and search term
  const filtered = useMemo(() => {
    let games = MOCK_GAMES;
    if (activeCategory === "My library") {
      games = games.filter((g) => g.saved);
    } else if (activeCategory !== "All games") {
      games = games.filter((g) => g.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      games = games.filter((g) => g.name.toLowerCase().includes(q));
    }
    return games;
  }, [activeCategory, search]);

  return (
    <View className="flex-1" style={{ backgroundColor: colors.bg }}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 100, // safe area + tab bar clearance
        }}
        columnWrapperStyle={{
          paddingHorizontal: 20,
          gap: 14,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        ListHeaderComponent={
          <>
            {/* Page header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingTop: insets.top + 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "Nunito_900Black",
                  fontSize: 28,
                  color: colors.text,
                }}
              >
                Library
              </Text>
              {/* + button */}
              <Pressable>
                <LinearGradient
                  colors={[colors.gradStart, colors.gradEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 22,
                      fontWeight: "700",
                      lineHeight: 24,
                      marginTop: -1,
                    }}
                  >
                    +
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>

            {/* Category pills */}
            <CategoryPills
              colors={colors}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />

            {/* Search bar */}
            <SearchBar colors={colors} value={search} onChangeText={setSearch} />

            {/* Spacer before grid */}
            <View style={{ height: 20 }} />
          </>
        }
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text
              style={{
                fontFamily: "Nunito_600SemiBold",
                fontSize: 15,
                color: colors.muted,
              }}
            >
              No games found
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <GameCard game={item} colors={colors} />
          </View>
        )}
      />
    </View>
  );
}
