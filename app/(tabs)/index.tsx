// Agent 2 — Dashboard screen
import { ScrollView, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../lib/theme";
import HeroCard from "../../components/dashboard/HeroCard";
import SearchBar from "../../components/dashboard/SearchBar";
import StatChips from "../../components/dashboard/StatChips";
import RecentlyPlayed from "../../components/dashboard/RecentlyPlayed";
import PopularGames from "../../components/dashboard/PopularGames";

// Mock stats — will be replaced with real data from Supabase later
const MOCK_LIBRARY_COUNT = 12;
const MOCK_RULES_ANSWERED = 47;

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? theme.dark : theme.light;
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{
        paddingTop: insets.top + 16,
        // Extra padding so content clears the 88px frosted tab bar
        paddingBottom: 100,
        gap: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <HeroCard colors={colors} libraryCount={MOCK_LIBRARY_COUNT} />
      <SearchBar colors={colors} />
      <StatChips
        colors={colors}
        libraryCount={MOCK_LIBRARY_COUNT}
        rulesAnswered={MOCK_RULES_ANSWERED}
      />
      <RecentlyPlayed colors={colors} />
      <PopularGames colors={colors} />
    </ScrollView>
  );
}
