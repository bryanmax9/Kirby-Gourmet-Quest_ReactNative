import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: #ff69b4;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 5px;
`;

const Texto = styled(Text)`
  color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Kirby Cafe",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIBTkDtZ_wiJYsUmh9RnnhCOc-o80aUXN4g&s",
    ],
    address = "123 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Texto>🍽️Restaurant: {name}</Texto>
        <Texto>📍Address: {address}</Texto>
        <Texto>⭐️Rating: {rating}</Texto>
      </Card.Content>
    </RestaurantCard>
  );
};
