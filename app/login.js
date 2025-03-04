import { useState } from "react";
import { useApiServices } from "../context/ApiContext";
import { useAuth } from "../context/providers/AuthProvider";
import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const { login } = useAuth();
  const apiServices = useApiServices();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    if (!!event?.preventDefault()) {
      event.preventDefault();
    }
    if (email.trim() && password.trim()) {
      try {
        const loginResponse = apiServices.login({ email, password });
        if (!!loginResponse) {
          login(loginResponse);
          router.replace("/");
        }
      } catch (error) {
        //TIRAR TOAST DE ERROR
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={(e) => handleLogin(e)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: 200, borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});
