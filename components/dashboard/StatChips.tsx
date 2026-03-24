// Agent 2 — Stat chips row (library count + rules answered)
import { View, Text } from "react-native";
import type { ThemeColors } from "../../lib/theme";

interface StatChipsProps {
  colors: ThemeColors;
  libraryCount: number;
  rulesAnswered: number;
}

export default function StatChips({
  colors,
  libraryCount,
  rulesAnswered,
}: StatChipsProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        marginHorizontal: 16,
      }}
    >
      <Chip
        label="In Library"
        value={libraryCount}
        colors={colors}
      />
      <Chip
        label="Rules Answered"
        value={rulesAnswered}
        colors={colors}
      />
    </View>
  );
}

function Chip({
  label,
  value,
  colors,
}: {
  label: string;
  value: number;
  colors: ThemeColors;
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 14,
      }}
    >
      <Text
        style={{
          fontFamily: "DMMono_500Medium",
          fontSize: 20,
          color: colors.accent,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito_600SemiBold",
          fontSize: 12,
          color: colors.muted,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
