import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Settings = () => {
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>;
};
const Map = () => {
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>;
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarStyle: { backgroundColor: "#F7E8A4" }, // Khaki color for tab bar
    tabBarActiveTintColor: "#FF69B4", // Bright pink for active tab icon
    tabBarInactiveTintColor: "#000000", // Black for inactive tab icon
    headerStyle: { backgroundColor: "#F7E8A4" }, // Khaki color for header
    headerTitleStyle: { color: "#000000" }, // Black color for header title
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
