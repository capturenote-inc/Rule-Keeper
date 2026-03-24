// Agent 3 — Category filter pills for Library screen
import { ScrollView, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ThemeColors } from "../../lib/theme";

const CATEGORIES = ["All games", "My library", "Strategy", "Family", "Party"];

interface CategoryPillsProps {
  colors: ThemeColors;
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryPills({
  colors,
  activeCategory,
  onSelect,
}: CategoryPillsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
      style={{ flexGrow: 0, marginTop: 16 }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat === activeCategory;

        if (isActive) {
          return (
            <LinearGradient
              key={cat}
              colors={[colors.gradStart, colors.gradEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ borderRadius: 100, paddingHorizontal: 18, paddingVertical: 8 }}
            >
              <Text
                style={{
                  fontFamily: "Nunito_700Bold",
                  fontSize: 13,
                  color: "#FFFFFF",
                }}
              >
                {cat}
              </Text>
            </LinearGradient>
          );
        }

        return (
          <Pressable
            key={cat}
            onPress={() => onSelect(cat)}
            style={{
              borderRadius: 100,
              paddingHorizontal: 18,
              paddingVertical: 8,
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_600SemiBold",
                fontSize: 13,
                color: colors.muted,
              }}
            >
              {cat}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
