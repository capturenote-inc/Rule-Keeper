// Agent 2 — Gradient hero card with greeting, title, and game count
import { View, Text } from "react-native";
import type { ThemeColors } from "../../lib/theme";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

interface HeroCardProps {
  colors: ThemeColors;
  libraryCount: number;
}

export default function HeroCard({ colors, libraryCount }: HeroCardProps) {
  return (
    <View
      style={{
        borderRadius: 26,
        backgroundColor: colors.gradStart,
        padding: 28,
        marginHorizontal: 16,
        // Shadow using primary colour
        shadowColor: colors.gradStart,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 32,
        elevation: 12,
        overflow: "hidden",
      }}
    >
      {/* Decorative emoji — low opacity, bottom-right */}
      <Text
        style={{
          position: "absolute",
          bottom: -8,
          right: -4,
          fontSize: 80,
          opacity: 0.12,
        }}
      >
        🎲
      </Text>

      {/* Eyebrow */}
      <Text
        style={{
          fontFamily: "DMMono_500Medium",
          fontSize: 11,
          letterSpacing: 1.5,
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {getGreeting()}
      </Text>

      {/* Title with Fraunces italic on "play?" */}
      <Text
        style={{
          fontFamily: "Nunito_900Black",
          fontSize: 28,
          letterSpacing: -0.02 * 28,
          color: "#FFFFFF",
        }}
      >
        Ready to{" "}
        <Text
          style={{
            fontFamily: "Fraunces_700Bold_Italic",
          }}
        >
          play?
        </Text>
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontFamily: "Nunito_600SemiBold",
          fontSize: 14,
          color: "rgba(255,255,255,0.65)",
          marginTop: 8,
        }}
      >
        You have {libraryCount} game{libraryCount !== 1 ? "s" : ""} in your
        library
      </Text>
    </View>
  );
}
