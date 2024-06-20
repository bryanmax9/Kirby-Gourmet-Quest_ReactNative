import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg"; // Ensure SvgXml is imported
import { Text } from "../../../components/typography/text.component"; // Ensure Text is imported

export const Icon = styled(Image)`
  padding-left: 16px;
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 5px;
`;

export const Texto = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;
