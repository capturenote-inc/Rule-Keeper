// Agent 4 — Gradient hero card with emoji, title, metadata, and back button
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import type { ThemeColors } from "../../lib/theme";
import type { GameMeta } from "./mockData";

interface GameHeroProps {
  game: GameMeta;
  colors: ThemeColors;
}

function BackArrow({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MetaChip({ label, colors }: { label: string; colors: ThemeColors }) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.15)",
      }}
    >
      <Text
        style={{
          fontFamily: "DMMono_400Regular",
          fontSize: 11,
          color: "#FFFFFF",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function GameHero({ game, colors }: GameHeroProps) {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
      <LinearGradient
        colors={[colors.gradStart, colors.gradEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 26,
          padding: 20,
          paddingTop: 16,
          shadowColor: colors.gradStart,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.25,
          shadowRadius: 32,
          elevation: 12,
        }}
      >
        {/* Back button */}
        <Pressable
          onPress={() => router.back()}
          hitSlop={12}
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "rgba(255,255,255,0.15)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <BackArrow color="#FFFFFF" />
        </Pressable>

        {/* Large emoji */}
        <Text style={{ fontSize: 56, textAlign: "center", marginBottom: 8 }}>
          {game.emoji}
        </Text>

        {/* Title */}
        <Text
          style={{
            fontFamily: "Nunito_900Black",
            fontSize: 28,
            color: "#FFFFFF",
            textAlign: "center",
            letterSpacing: -0.5,
          }}
        >
          {game.name}
        </Text>

        {/* Tagline */}
        <Text
          style={{
            fontFamily: "Nunito_600SemiBold",
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginTop: 4,
            marginBottom: 14,
          }}
        >
          {game.tagline}
        </Text>

        {/* Metadata chips */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <MetaChip label={game.players} colors={colors} />
          <MetaChip label={game.time} colors={colors} />
          <MetaChip label={game.difficulty} colors={colors} />
        </View>
      </LinearGradient>
    </View>
  );
}
