import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { AppArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

const ScreenContainer = styled(View)`
  flex: 1;
  background-color: khaki;
`;

const AccordionTitle = styled(List.Accordion)`
  background-color: #ff69b4;
`;

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const restaurant = route.params.restaurant;

  return (
    <ScreenContainer>
      <AppArea>
        <RestaurantInfoCard restaurant={restaurant} />
        <ScrollView>
          <AccordionTitle
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </AccordionTitle>
          <AccordionTitle
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </AccordionTitle>
          <AccordionTitle
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom" />
            <List.Item title="Steak Frites" />
          </AccordionTitle>
          <AccordionTitle
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </AccordionTitle>
        </ScrollView>
      </AppArea>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "khaki",
  },
  accordion: {
    backgroundColor: "#FF69B4",
  },
});
