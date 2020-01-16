import styled from 'styled-components';
import CardView from 'react-native-cardview';

export const Container = styled.View`
  flex: 1;
  background: #f4f6f6;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(CardView).attrs({
  cardElevation: 5,
  cardMaxElevation: 5,
  cornerRadius: 5,
})`
  flex: 1;
  padding: 50px;
  margin: 30px;
`;

export const ImageCard = styled.Image`
  width: 200px;
  height: 250px;
  align-self: center;
`;

export const NameHeroCard = styled.Text`
  align-self: center;
  padding: 10px;
  font-size: 20px;
  font-family: 'bold';
`;

export const DescritionHeroCard = styled.Text`
  padding: 10px;
  align-self: center;
`;
