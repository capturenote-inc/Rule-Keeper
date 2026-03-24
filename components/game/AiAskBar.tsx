// Agent 4 — Pinned AI ask bar at the bottom of the game page
import { View, TextInput, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import type { ThemeColors } from "../../lib/theme";

interface AiAskBarProps {
  colors: ThemeColors;
}

function SendArrow() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function AiAskBar({ colors }: AiAskBarProps) {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.surface2,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: colors.accent + "30",
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        {/* Star icon */}
        <Text
          style={{
            fontSize: 16,
            color: colors.accent,
            marginRight: 8,
          }}
        >
          {"\u2726"}
        </Text>

        {/* Text input */}
        <TextInput
          placeholder="Ask a rule question..."
          placeholderTextColor={colors.faint}
          style={{
            flex: 1,
            fontFamily: "Nunito_600SemiBold",
            fontSize: 14,
            color: colors.text,
            fontStyle: "italic",
            paddingVertical: 0,
          }}
          editable={false}
        />

        {/* Send button */}
        <LinearGradient
          colors={[colors.gradStart, colors.gradEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 12, marginLeft: 8 }}
        >
          <Pressable
            style={{
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SendArrow />
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
}
