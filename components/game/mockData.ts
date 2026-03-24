// Agent 4 — Mock data for the Game page (Wingspan)

export interface GameMeta {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  players: string;
  time: string;
  difficulty: string;
}

export interface RuleChunkData {
  id: string;
  number: number;
  title: string;
  body: string;
}

export interface ChapterData {
  id: string;
  label: string;
  chunks: RuleChunkData[];
}

export const mockGame: GameMeta = {
  id: "wingspan",
  emoji: "\uD83D\uDC26",
  name: "Wingspan",
  tagline: "A competitive bird-collection engine-building game",
  players: "1\u20135 players",
  time: "40\u201370 min",
  difficulty: "Medium",
};

export const mockAiAnswer = {
  question: "How do I gain food tokens?",
  answer:
    "You gain food tokens by placing a bird in the **forest habitat** (top row). When you activate that row, you roll the birdfeeder dice and take food matching the face shown. Some bird powers also let you gain **bonus food** when activated.",
};

export const mockChapters: ChapterData[] = [
  {
    id: "setup",
    label: "Setup",
    chunks: [
      {
        id: "setup-1",
        number: 1,
        title: "Prepare the bird feeder",
        body: "Place the birdfeeder dice tower in the centre of the table. Toss all 5 food dice into the birdfeeder. These dice represent the available food supply for all players.",
      },
      {
        id: "setup-2",
        number: 2,
        title: "Shuffle and deal bird cards",
        body: "Shuffle all bird cards into a face-down deck. Deal 5 bird cards to each player. Place 3 bird cards face-up in the bird tray beside the deck.",
      },
      {
        id: "setup-3",
        number: 3,
        title: "Prepare bonus cards and goals",
        body: "Shuffle the bonus cards and deal 2 to each player \u2014 each player keeps 1 and discards the other. Randomly select 4 end-of-round goal tiles and place one on each round slot.",
      },
      {
        id: "setup-4",
        number: 4,
        title: "Distribute starting resources",
        body: "Give each player 5 food tokens (1 of each type). Each player also receives 8 action cubes of their chosen colour. The player who most recently went birdwatching takes the first-player token.",
      },
    ],
  },
  {
    id: "turn-order",
    label: "Turn order",
    chunks: [
      {
        id: "turn-1",
        number: 1,
        title: "Choose one action per turn",
        body: "On your turn you must perform exactly one of four actions: play a bird, gain food, lay eggs, or draw bird cards. Place an action cube in the leftmost open space of the corresponding habitat row.",
      },
      {
        id: "turn-2",
        number: 2,
        title: "Activate habitat birds from right to left",
        body: "After placing your action cube, slide it from right to left along the row. Each bird with a brown \u201Cwhen activated\u201D power triggers as the cube passes it.",
      },
    ],
  },
  {
    id: "bird-cards",
    label: "Bird cards",
    chunks: [
      {
        id: "bird-1",
        number: 1,
        title: "Anatomy of a bird card",
        body: "Each bird card shows the bird\u2019s name, habitat preference (forest, grassland, or wetland), food cost, nest type, egg capacity, wingspan, and special power. The point value is in the top-left feather icon.",
      },
      {
        id: "bird-2",
        number: 2,
        title: "Playing a bird card",
        body: "To play a bird, pay its food cost from your personal supply, then place it in the leftmost open space of one of its matching habitats. If the column requires eggs, pay those too from birds you already have in play.",
      },
    ],
  },
  {
    id: "food-eggs",
    label: "Food & eggs",
    chunks: [
      {
        id: "food-1",
        number: 1,
        title: "Gaining food from the birdfeeder",
        body: "When you choose the gain-food action, place your action cube in the forest row. You may take food dice from the birdfeeder matching any faces showing. If all remaining dice show the same face, you may reroll before choosing.",
      },
      {
        id: "food-2",
        number: 2,
        title: "Laying eggs",
        body: "When you choose the lay-eggs action, place your action cube in the grassland row. You receive a number of eggs determined by how far right you place the cube. Distribute eggs on any birds you have in play, up to each bird\u2019s egg limit.",
      },
    ],
  },
  {
    id: "end-game",
    label: "End game",
    chunks: [
      {
        id: "end-1",
        number: 1,
        title: "When the game ends",
        body: "The game lasts 4 rounds. Each round ends when all players have used all their action cubes. You start with 8 cubes in round 1, then lose 1 each round (7, 6, 5) as cubes are placed on the round-goal board.",
      },
      {
        id: "end-2",
        number: 2,
        title: "Final scoring",
        body: "Add up: points printed on each bird card, bonus card points, end-of-round goal points, 1 point per egg on birds, 1 point per cached food token, and 1 point per tucked card. The player with the most points wins.",
      },
    ],
  },
];
