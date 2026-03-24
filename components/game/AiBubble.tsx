// Agent 4 — AI answer bubble with grad-soft background
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ThemeColors } from "../../lib/theme";

interface AiBubbleProps {
  question: string;
  answer: string;
  colors: ThemeColors;
}

// Renders answer text with **bold** markdown segments
function AnswerText({ text, colors }: { text: string; colors: ThemeColors }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Text
      style={{
        fontFamily: "Nunito_600SemiBold",
        fontSize: 14,
        color: colors.muted,
        lineHeight: 22,
      }}
    >
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <Text key={i} style={{ color: colors.text, fontFamily: "Nunito_700Bold" }}>
              {part.slice(2, -2)}
            </Text>
          );
        }
        return part;
      })}
    </Text>
  );
}

export default function AiBubble({ question, answer, colors }: AiBubbleProps) {
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
      {/* User question */}
      <View
        style={{
          alignSelf: "flex-end",
          backgroundColor: colors.surface,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 20,
          borderBottomRightRadius: 6,
          paddingHorizontal: 14,
          paddingVertical: 10,
          marginBottom: 8,
          maxWidth: "85%",
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito_600SemiBold",
            fontSize: 14,
            color: colors.text,
          }}
        >
          {question}
        </Text>
      </View>

      {/* AI answer */}
      <LinearGradient
        colors={[colors.gradSoftStart, colors.gradSoftEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 20,
          borderBottomLeftRadius: 6,
          borderWidth: 1,
          borderColor: colors.accent + "30",
          paddingHorizontal: 14,
          paddingVertical: 12,
          maxWidth: "85%",
        }}
      >
        <Text
          style={{
            fontFamily: "DMMono_500Medium",
            fontSize: 10,
            color: colors.accent,
            textTransform: "uppercase",
            letterSpacing: 1,
            marginBottom: 6,
          }}
        >
          AI Assistant
        </Text>
        <AnswerText text={answer} colors={colors} />
      </LinearGradient>
    </View>
  );
}
