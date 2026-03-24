// Agent 1 — Supabase client configuration
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const supabaseUrl = "https://pxvbivjzpmxovxjcdfab.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4dmJpdmp6cG14b3Z4amNkZmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTYwMTEsImV4cCI6MjA4OTkzMjAxMX0.Y6ODuGPhHYdLRydU10x8bJqbpOwsiJ1lV7XUwIvUDds";

// SecureStore adapter for Supabase auth token persistence
// Falls back to no persistence on web where SecureStore is unavailable
const SecureStoreAdapter =
  Platform.OS !== "web"
    ? {
        getItem: (key: string) => SecureStore.getItemAsync(key),
        setItem: (key: string, value: string) =>
          SecureStore.setItemAsync(key, value),
        removeItem: (key: string) => SecureStore.deleteItemAsync(key),
      }
    : undefined;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: SecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
