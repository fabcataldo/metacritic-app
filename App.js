import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";

import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Providers } from "./context/providers";

export default function App() {
  return (
    <Providers>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Main />
        </View>
      </SafeAreaProvider>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
