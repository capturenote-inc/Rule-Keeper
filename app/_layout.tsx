// Agent 1 — Root layout: loads fonts and renders the navigation slot
import "../global.css";
import { useEffect } from "react";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import {
  Fraunces_500Medium_Italic,
  Fraunces_600SemiBold_Italic,
  Fraunces_700Bold_Italic,
} from "@expo-google-fonts/fraunces";
import {
  DMMono_400Regular,
  DMMono_500Medium,
} from "@expo-google-fonts/dm-mono";

// Prevent the splash screen from hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Fraunces_500Medium_Italic,
    Fraunces_600SemiBold_Italic,
    Fraunces_700Bold_Italic,
    DMMono_400Regular,
    DMMono_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Slot />;
}
