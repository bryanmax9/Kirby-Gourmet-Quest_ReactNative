import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppArea } from "./src/components/utility/safe-area.component";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <AppArea>
    <Text>Settings</Text>
  </AppArea>
);
const Map = () => (
  <AppArea>
    <Text>Map</Text>
  </AppArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { backgroundColor: "#F7E8A4" }, // Khaki color for tab bar
              tabBarActiveTintColor: "#FF69B4", // Bright pink for active tab icon
              tabBarInactiveTintColor: "#000000", // Black for inactive tab icon
              headerStyle: { backgroundColor: "#F7E8A4" }, // Khaki color for header
              headerTitleStyle: { color: "#000000" }, // Black color for header title
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
