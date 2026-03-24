// Agent 1 — Theme colour tokens from CLAUDE.md section 08

export const theme = {
  dark: {
    bg: "#0A0614",
    surface: "#120E22",
    surface2: "#1A1530",
    border: "#2C2450",
    text: "#F0ECFF",
    muted: "#9888C8",
    faint: "#48408A",
    accent: "#C084FC",
    accent2: "#F472B6",
    // Gradient stops (use these to build LinearGradient components)
    gradStart: "#9333EA",
    gradEnd: "#EC4899",
    // Soft gradient for AI bubble backgrounds
    gradSoftStart: "rgba(147,51,234,0.18)",
    gradSoftEnd: "rgba(236,72,153,0.12)",
    // Ambient glows
    glowTopRight: "rgba(147,51,234,0.10)",
    glowBottomLeft: "rgba(236,72,153,0.08)",
  },
  light: {
    bg: "#F6FAF4",
    surface: "#FFFFFF",
    surface2: "#EAF4E4",
    border: "#C8DCC0",
    text: "#081A08",
    muted: "#285028",
    faint: "#90B888",
    accent: "#206820",
    accent2: "#B88010",
    // Gradient stops
    gradStart: "#1E6020",
    gradEnd: "#A07810",
    // Soft gradient for AI bubble backgrounds
    gradSoftStart: "rgba(30,96,32,0.07)",
    gradSoftEnd: "rgba(160,120,16,0.05)",
    // Ambient glows (not typically used in light mode, but available)
    glowTopRight: "rgba(30,96,32,0.06)",
    glowBottomLeft: "rgba(160,120,16,0.04)",
  },
} as const;

export type ThemeMode = keyof typeof theme;
export type ThemeColors = typeof theme.dark;
