import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "./MyAccountScreen";
import ClosetFinderScreen from "./ClosetFinderScreen";
import SettingsScreen from "./SettingsScreen";
import loginScreen from "./loginScreen";
import BoardScreen from "./BoardScreen";

const Stack = createStackNavigator();
function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Menu");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AsaP!</Text>
      <Text style={styles.subtitle}>AsaP에서 옷장을 공유하세요.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function MenuScreen({ navigation }) {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.menuTitle}>Menu</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyAccount")}
        >
          <Text style={styles.buttonText}>👤나의 계정</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ClosetFinder")}
        >
          <Text style={styles.buttonText}>🧥옷 대여하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Board")}
        >
          <Text style={styles.buttonText}>게시물 쓰러 가기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>⚙️나의 AsaP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.buttonText}>🔑로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MyAccount" component={MyAccountScreen} />
        <Stack.Screen name="ClosetFinder" component={ClosetFinderScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="Board" component={BoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDE5",
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#001f3f",
  },
  container: {
    flex: 1,
    backgroundColor: "#F0EDE5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#001f3f",
  },
  subtitle: {
    fontSize: 18,
    color: "#001f3f",
  },
  buttonText: {
    color: "black", // 버튼 텍스트 색상
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "column", // 버튼들을 가로로 배치
    alignItems: "center",
    justifyContent: "space-around", // 버튼 사이에 공간을 균등하게 배분
  },
  button: {
    backgroundColor: "#F0EDE5", // 버튼 배경색
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderBottomWidth: 1, // 하단 경계선 두께
    borderBottomColor: "gray", // 하단 경계선 색상
  },
});
