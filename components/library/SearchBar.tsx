// Agent 3 — Search bar for Library screen
import { View, TextInput } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import type { ThemeColors } from "../../lib/theme";

interface SearchBarProps {
  colors: ThemeColors;
  value: string;
  onChangeText: (text: string) => void;
}

function MagnifierIcon({ color }: { color: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={11}
        cy={11}
        r={8}
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M21 21l-4.35-4.35"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default function SearchBar({ colors, value, onChangeText }: SearchBarProps) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface2,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 18,
        paddingHorizontal: 14,
        height: 48,
        gap: 10,
      }}
    >
      <MagnifierIcon color={colors.faint} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search games..."
        placeholderTextColor={colors.faint}
        style={{
          flex: 1,
          fontFamily: "Nunito_600SemiBold",
          fontStyle: "italic",
          fontSize: 15,
          color: colors.text,
          paddingVertical: 0,
        }}
      />
    </View>
  );
}
