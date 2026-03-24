// Agent 4 — Game page screen: hero, chapter tabs, AI bubble, rule chunks, ask bar
import { useState } from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../lib/theme";
import GameHero from "../components/game/GameHero";
import ChapterTabs from "../components/game/ChapterTabs";
import AiBubble from "../components/game/AiBubble";
import RuleChunk from "../components/game/RuleChunk";
import AiAskBar from "../components/game/AiAskBar";
import { mockGame, mockAiAnswer, mockChapters } from "../components/game/mockData";

export default function GameScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? theme.dark : theme.light;
  const [activeChapter, setActiveChapter] = useState(mockChapters[0].id);

  const currentChapter = mockChapters.find((c) => c.id === activeChapter) ?? mockChapters[0];
  const tabs = mockChapters.map((c) => ({ id: c.id, label: c.label }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Gradient hero */}
          <GameHero game={mockGame} colors={colors} />

          {/* Chapter tabs */}
          <ChapterTabs
            tabs={tabs}
            activeId={activeChapter}
            onSelect={setActiveChapter}
            colors={colors}
          />

          {/* AI answer bubble (mock) */}
          <AiBubble
            question={mockAiAnswer.question}
            answer={mockAiAnswer.answer}
            colors={colors}
          />

          {/* Rule chunks for the active chapter */}
          <View style={{ paddingHorizontal: 16 }}>
            {currentChapter.chunks.map((chunk) => (
              <RuleChunk key={chunk.id} chunk={chunk} colors={colors} />
            ))}
          </View>
        </ScrollView>

        {/* Pinned AI ask bar */}
        <AiAskBar colors={colors} />
      </View>
    </SafeAreaView>
  );
}
