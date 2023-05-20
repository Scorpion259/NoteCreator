import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import UserDataProvider from "./app/components/UserDataProvider";
import UserContent from "./app/components/UserContent";

export default function App() {
  <UserDataProvider>
    <UserContent />
  </UserDataProvider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
