// Agent 1 — Home tab placeholder screen
import { View, Text, useColorScheme } from "react-native";
import { theme } from "../../lib/theme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? theme.dark : theme.light;

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: colors.bg }}
    >
      <Text
        style={{
          fontFamily: "Nunito_900Black",
          fontSize: 28,
          color: colors.text,
        }}
      >
        Home
      </Text>
      <Text
        style={{
          fontFamily: "Nunito_600SemiBold",
          fontSize: 16,
          color: colors.muted,
          marginTop: 8,
        }}
      >
        Dashboard coming soon
      </Text>
    </View>
  );
}
