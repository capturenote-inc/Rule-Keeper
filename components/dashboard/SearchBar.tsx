// Agent 2 — Dashboard search bar with magnifier icon
import { View, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { ThemeColors } from "../../lib/theme";

interface SearchBarProps {
  colors: ThemeColors;
}

export default function SearchBar({ colors }: SearchBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface2,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 18,
        marginHorizontal: 16,
        paddingHorizontal: 14,
        height: 48,
      }}
    >
      {/* Magnifier icon */}
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path
          d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
          stroke={colors.faint}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

      <TextInput
        placeholder="Search your games..."
        placeholderTextColor={colors.faint}
        style={{
          flex: 1,
          marginLeft: 10,
          fontFamily: "Nunito_600SemiBold",
          fontStyle: "italic",
          fontSize: 15,
          color: colors.text,
        }}
      />
    </View>
  );
}
