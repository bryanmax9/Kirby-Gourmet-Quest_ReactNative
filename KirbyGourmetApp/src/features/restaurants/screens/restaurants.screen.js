import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AppArea } from "../../../components/utility/safe-area.component";
const WholeScreen = styled(View)`
  flex: 1;
  background-color: khaki;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <WholeScreen>
      <AppArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </AppArea>
    </WholeScreen>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 16,
  },
});
