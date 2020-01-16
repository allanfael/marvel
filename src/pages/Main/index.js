import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ToastAndroid} from 'react-native';
import md5 from 'js-md5';
import axios from 'axios';

import {
  Container,
  TitleView,
  TextMarvel,
  TextFront,
  LabelInput,
  SearchView,
  Search,
  NameView,
  TextName,
  List,
  Hero,
  ImageHero,
  NameHero,
  ItemSeparator,
  Footer,
  ButtonFooter,
  TextFooter,
} from './styles';

const PUBLIC_KEY = 'xxxxx';
const PRIVATE_KEY = 'xxxxx';

export default function Main({navigation}) {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  getHero = () => {
    axios
      .get(
        `https://gateway.marvel.com:/v1/public/characters?ts=${timestamp}&limit=4$page=${page}&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
      )
      .then(res => {
        setHero([...hero, ...res.data.data.results]);
        console.log(hero);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        ToastAndroid.show('Erro', ToastAndroid.LONG);
      });
  };

  useEffect(() => {
    getHero();
  }, [page]);

  searchHero = () => {
    setLoading(true);

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
      )
      .then(response => {
        if (response.data.data.results === []) {
          setLoading(false);
          ToastAndroid.show('Nada encontrado', ToastAndroid.LONG);
        } else {
          setHero(response.data.data.results);
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
        ToastAndroid.show('Error', ToastAndroid.LONG);
      });
  };

  return (
    <Container>
      <TitleView>
        <TextMarvel>BUSCA MARVEL</TextMarvel>
        <TextFront>TESTE FRONT-END</TextFront>
      </TitleView>

      <SearchView>
        <LabelInput>Nome do Personagem</LabelInput>
        <Search
          autoCorrect={false}
          autoCapitalize="none"
          value={search}
          onChangeText={setSearch}
          returnKeyType="send"
          onSubmitEditing={searchHero}
        />
      </SearchView>

      <NameView>
        <TextName>Nome</TextName>
      </NameView>

      {loading ? (
        <ActivityIndicator size="large" animating={loading} />
      ) : (
        <List
          data={hero}
          renderItem={({item}) => (
            <Hero
              onPress={() =>
                navigation.navigate('Details', {
                  item,
                })
              }>
              <ImageHero
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <NameHero>{item.name}</NameHero>
            </Hero>
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListFooterComponent={() => {
            return (
              <Footer>
                <ButtonFooter
                  onPress={() => {
                    setPage(page + 1);
                    setOffset(offset + 4);
                  }}>
                  <TextFooter>CARREGAR MAIS</TextFooter>
                </ButtonFooter>
              </Footer>
            );
          }}
        />
      )}
    </Container>
  );
}
