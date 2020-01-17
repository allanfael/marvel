import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const TitleView = styled.View`
  margin-top: 12px;
  flex-direction: row;
  margin-left: 30px;
`;

export const TextMarvel = styled.Text`
  color: #d42026;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
`;

export const TextFront = styled.Text`
  color: #d42026;
  font-size: 16px;
  font-family: 'Roboto';
`;

export const SearchView = styled.View`
  height: 65px;
  margin-top: 12px;
`;

export const LabelInput = styled.Text`
  color: #d42026;
  margin-left: 30px;
  font-size: 15px;
  font-family: 'Arial';
`;

export const Search = styled.TextInput`
  flex: 1;
  background: #fff;
  margin-left: 30px;
  margin-right: 30px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid #eee;
  font-size: 16px;
  padding: 10px;

  box-shadow: 10px 5px 5px black;
`;

export const NameView = styled.View`
  height: 35px;
  margin-top: 12px;
  background: #d42026;
`;

export const TextName = styled.Text`
  color: #fff;
  justify-content: center;
  font-size: 18px;
  font-family: 'Arial';
  margin-left: 70px;
`;

export const List = styled.FlatList``;

export const Hero = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const ImageHero = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const NameHero = styled.Text`
  margin-left: 10px;
`;

export const ItemSeparator = styled.View`
  height: 1px;
  border-bottom-width: 1px;
  border-color: #d42026;
  margin-bottom: 10px;
`;

//ListFooter

export const Footer = styled.View`
  width: 200px;
  height: 50px;
  align-self: center;
`;

export const ButtonFooter = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 10px;
  background: #d42;
  opacity: 0.9;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const TextFooter = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Arial';
  text-align: center;
`;
