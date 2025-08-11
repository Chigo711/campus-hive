import { useAuth } from "@/context/AuthProvider";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (!success) Alert.alert("Error", "Invalid credentials");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput
        placeholder="ALU Email (@alustudent.com)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <Button title="Log In" onPress={handleLogin} />
      <Link
        href="/(auth)/signup"
        style={{ marginTop: 15, textAlign: "center" }}
      >
        Don't have an account? Sign up
      </Link>
    </View>
  );
}
