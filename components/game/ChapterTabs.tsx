// Agent 4 — Horizontal scrollable chapter/category pill tabs
import { ScrollView, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ThemeColors } from "../../lib/theme";

interface ChapterTabsProps {
  tabs: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
  colors: ThemeColors;
}

export default function ChapterTabs({
  tabs,
  activeId,
  onSelect,
  colors,
}: ChapterTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 8,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;

        if (isActive) {
          return (
            <LinearGradient
              key={tab.id}
              colors={[colors.gradStart, colors.gradEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ borderRadius: 100 }}
            >
              <Pressable
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Nunito_700Bold",
                    fontSize: 13,
                    color: "#FFFFFF",
                  }}
                >
                  {tab.label}
                </Text>
              </Pressable>
            </LinearGradient>
          );
        }

        return (
          <Pressable
            key={tab.id}
            onPress={() => onSelect(tab.id)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 100,
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 13,
                color: colors.muted,
              }}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
