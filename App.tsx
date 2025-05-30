import React from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";
import { ThemeProvider } from "./components/ThemeToggle";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <GameScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121213",
    justifyContent: "center",
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: "#121213",
    justifyContent: "center",
    alignItems: "center",
  },
});
