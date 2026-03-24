// Agent 4 — Expandable rule chunk card with animated chevron
import { useState, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { ThemeColors } from "../../lib/theme";
import type { RuleChunkData } from "./mockData";

interface RuleChunkProps {
  chunk: RuleChunkData;
  colors: ThemeColors;
}

function Chevron({ rotation, color }: { rotation: Animated.Value; color: string }) {
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
        <Path
          d="M6 9l6 6 6-6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}

export default function RuleChunk({ chunk, colors }: RuleChunkProps) {
  const [expanded, setExpanded] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    Animated.timing(rotation, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <Pressable
      onPress={toggle}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 14,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Number tag */}
        <View
          style={{
            backgroundColor: colors.accent + "20",
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 3,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "DMMono_500Medium",
              fontSize: 12,
              color: colors.accent,
            }}
          >
            {String(chunk.number).padStart(2, "0")}
          </Text>
        </View>

        {/* Title */}
        <Text
          style={{
            flex: 1,
            fontFamily: "Nunito_800ExtraBold",
            fontSize: 15,
            color: colors.text,
          }}
          numberOfLines={expanded ? undefined : 1}
        >
          {chunk.title}
        </Text>

        {/* Chevron */}
        <Chevron rotation={rotation} color={colors.faint} />
      </View>

      {/* Body — shown when expanded */}
      {expanded && (
        <Text
          style={{
            fontFamily: "Nunito_600SemiBold",
            fontSize: 14,
            color: colors.muted,
            lineHeight: 14 * 1.7,
            marginTop: 10,
            paddingLeft: 42,
          }}
        >
          {chunk.body}
        </Text>
      )}
    </Pressable>
  );
}
