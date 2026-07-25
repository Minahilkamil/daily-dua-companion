import React, { useState, useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Animated,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Session } from "@supabase/supabase-js";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";
import ChatScreen from "./src/screens/Chat";
import CategoriesScreen from "./src/screens/Categories";
import FavoritesScreen from "./src/screens/Favorites";
import { supabase, getTheme, setTheme } from "./src/services/supabase";
import { RootStackParamList, MainTabParamList, Theme } from "./src/types";
import { getColors } from "./src/constants/colors";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainStack = createNativeStackNavigator<MainTabParamList>();

const SCREEN_WIDTH = Dimensions.get("window").width;

function Sidebar({
  visible,
  onClose,
  currentScreen,
  navigate,
  theme,
  toggleTheme,
}: {
  visible: boolean;
  onClose: () => void;
  currentScreen: keyof MainTabParamList;
  navigate: (screen: keyof MainTabParamList) => void;
  theme: Theme;
  toggleTheme: () => void;
}) {
  const colors = getColors(theme);
  const insets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(visible);
  const slideAnim = useRef(new Animated.Value(-SCREEN_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 280,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 280,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -SCREEN_WIDTH,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start(() => setModalVisible(false));
    }
  }, [visible]);
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          onClose();
          await supabase.auth.signOut();
        },
      },
    ]);
  };
  const menuItems = [
    { name: "Chat" as const, icon: "chatbubbles-outline", label: "Chat" },
    { name: "Categories" as const, icon: "list-outline", label: "Categories" },
    { name: "Favorites" as const, icon: "heart-outline", label: "Favorites" },
  ];

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <View style={styles.sidebarOverlay}>
        <Animated.View
          style={[styles.sidebarBackdropAnimated, { opacity: fadeAnim }]}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={onClose}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.sidebarContainer,
            {
              backgroundColor: colors.cardBackground,
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <View style={styles.sidebarHeader}>
            <Text style={[styles.sidebarTitle, { color: colors.darkText }]}>
              Daily Dua Companion
            </Text>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="close" size={24} color={colors.darkText} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.sidebarContent}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={[
                  styles.sidebarItem,
                  currentScreen === item.name && {
                    backgroundColor: colors.primaryGreen + "20",
                  },
                ]}
                onPress={() => {
                  navigate(item.name);
                  onClose();
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={
                    currentScreen === item.name
                      ? colors.primaryGreen
                      : colors.mutedText
                  }
                />
                <Text
                  style={[
                    styles.sidebarItemText,
                    {
                      color:
                        currentScreen === item.name
                          ? colors.primaryGreen
                          : colors.darkText,
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.sidebarFooter}>
            <TouchableOpacity
              style={styles.themeToggle}
              onPress={toggleTheme}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name={theme === "light" ? "moon-outline" : "sunny-outline"}
                size={22}
                color={colors.darkText}
              />
              <Text
                style={[styles.themeToggleText, { color: colors.darkText }]}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.themeToggle, { marginTop: 18 }]}
              onPress={handleLogout}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="log-out-outline" size={22} color="#E74C3C" />
              <Text style={[styles.themeToggleText, { color: "#E74C3C" }]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

function MainNavigator({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  const colors = getColors(theme);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentScreen, setCurrentScreen] =
    useState<keyof MainTabParamList>("Chat");
  const navRef = useRef<any>(null);

  return (
    <MainStack.Navigator
      screenOptions={({ navigation }) => {
        navRef.current = navigation;
        return {
          headerShown: true,
          headerStyle: { backgroundColor: colors.cardBackground },
          headerTintColor: colors.darkText,
          headerTitleStyle: { color: colors.darkText },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => setSidebarVisible(true)}
              style={styles.headerMenuButton}
            >
              <Ionicons name="menu-outline" size={28} color={colors.darkText} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={toggleTheme}
              style={styles.headerThemeButton}
            >
              <Ionicons
                name={theme === "light" ? "moon-outline" : "sunny-outline"}
                size={24}
                color={colors.darkText}
              />
            </TouchableOpacity>
          ),
        };
      }}
    >
      <MainStack.Screen
        name="Chat"
        listeners={{ focus: () => setCurrentScreen("Chat") }}
      >
        {() => (
          <>
            <ChatScreen theme={theme} toggleTheme={toggleTheme} />
            <Sidebar
              visible={sidebarVisible}
              onClose={() => setSidebarVisible(false)}
              currentScreen={currentScreen}
              navigate={(screen) => navRef.current?.navigate(screen)}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </>
        )}
      </MainStack.Screen>
      <MainStack.Screen
        name="Categories"
        listeners={{ focus: () => setCurrentScreen("Categories") }}
      >
        {() => (
          <>
            <CategoriesScreen theme={theme} />
            <Sidebar
              visible={sidebarVisible}
              onClose={() => setSidebarVisible(false)}
              currentScreen={currentScreen}
              navigate={(screen) => navRef.current?.navigate(screen)}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </>
        )}
      </MainStack.Screen>
      <MainStack.Screen
        name="Favorites"
        listeners={{ focus: () => setCurrentScreen("Favorites") }}
      >
        {() => (
          <>
            <FavoritesScreen theme={theme} />
            <Sidebar
              visible={sidebarVisible}
              onClose={() => setSidebarVisible(false)}
              currentScreen={currentScreen}
              navigate={(screen) => navRef.current?.navigate(screen)}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </>
        )}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
}

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setThemeState] = useState<Theme>("light");
  const colors = getColors(theme);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
    await setTheme(newTheme);
  };

  useEffect(() => {
    async function init() {
      const savedTheme = await getTheme();
      setThemeState(savedTheme);

      supabase.auth
        .getSession()
        .then(({ data: { session } }) => {
          setSession(session);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Session error:", err);
          setLoading(false);
        });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });

      return () => subscription.unsubscribe();
    }
    init();
  }, []);

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading) {
    return (
      <View
        style={[styles.splashContainer, { backgroundColor: colors.background }]}
      >
        <StatusBar
          style={theme === "dark" ? "light" : "dark"}
          backgroundColor={colors.background}
        />
        <Image
          source={require("./assets/images/splash.png")}
          style={styles.bismillahImage}
          resizeMode="contain"
        />
        <View
          style={[
            styles.splashCircle,
            { backgroundColor: colors.cardBackground },
          ]}
        >
          <Ionicons name="moon" size={36} color={colors.gold} />
        </View>
        <Text style={[styles.splashTitle, { color: colors.darkText }]}>
          Daily Dua Companion
        </Text>
        <View
          style={[styles.splashUnderline, { backgroundColor: colors.gold }]}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={colors.cardBackground}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {session ? (
            <Stack.Screen name="Main">
              {() => <MainNavigator theme={theme} toggleTheme={toggleTheme} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login">
                {(props) => (
                  <LoginScreen
                    {...props}
                    theme={theme}
                    toggleTheme={toggleTheme}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp">
                {(props) => (
                  <SignUpScreen
                    {...props}
                    theme={theme}
                    toggleTheme={toggleTheme}
                  />
                )}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  bismillahImage: {
    width: "85%",
    height: 90,
    marginBottom: 28,
  },
  splashCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  splashTitle: {
    fontSize: 26,
    fontWeight: "400",
    fontFamily: "Georgia",
    letterSpacing: 0.3,
  },
  splashUnderline: {
    width: 40,
    height: 2,
    marginTop: 10,
    borderRadius: 1,
  },
  headerMenuButton: {
    paddingHorizontal: 16,
  },
  headerThemeButton: {
    paddingHorizontal: 16,
  },
  sidebarOverlay: {
    flex: 1,
  },
  sidebarBackdropAnimated: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "75%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Georgia",
  },
  sidebarContent: {
    flex: 1,
    paddingVertical: 8,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 16,
  },
  sidebarItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  sidebarFooter: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 20,
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  themeToggleText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
