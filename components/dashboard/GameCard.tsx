// Agent 2 — Reusable game card for dashboard grids and scrolls
import { View, Text, Pressable } from "react-native";
import type { ThemeColors } from "../../lib/theme";

export interface GameCardData {
  id: string;
  emoji: string;
  name: string;
  category: string;
  players: string;
  saved?: boolean;
}

interface GameCardProps {
  game: GameCardData;
  colors: ThemeColors;
  width?: number;
}

export default function GameCard({ game, colors, width }: GameCardProps) {
  return (
    <Pressable
      style={{
        width: width ?? "100%",
        borderRadius: 20,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: "hidden",
      }}
    >
      {/* Cover area — square with centred emoji */}
      <View
        style={{
          aspectRatio: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.surface2,
        }}
      >
        <Text style={{ fontSize: 48 }}>{game.emoji}</Text>

        {/* Saved pip */}
        {game.saved && (
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: colors.gradStart,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 13, fontWeight: "700" }}>
              ✓
            </Text>
          </View>
        )}
      </View>

      {/* Bottom accent line */}
      <View
        style={{
          height: 2,
          backgroundColor: colors.gradStart,
        }}
      />

      {/* Info area */}
      <View style={{ padding: 10 }}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Nunito_800ExtraBold",
            fontSize: 14,
            color: colors.text,
          }}
        >
          {game.name}
        </Text>
        <Text
          style={{
            fontFamily: "DMMono_400Regular",
            fontSize: 10,
            color: colors.faint,
            marginTop: 2,
          }}
        >
          {game.category} · {game.players}
        </Text>
      </View>
    </Pressable>
  );
}
