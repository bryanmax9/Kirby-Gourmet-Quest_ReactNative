// restaurant-info-card.component.js
import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Texto,
  Rating,
  Section,
  SectionEnd,
  Open,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Kirby Cafe",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIBTkDtZ_wiJYsUmh9RnnhCOc-o80aUXN4g&s",
    ],
    address = "123 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">🍽️Restaurant: {name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error"> Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={30} height={30} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Texto>📍Address: {address}</Texto>
      </Card.Content>
    </RestaurantCard>
  );
};
