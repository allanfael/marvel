import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import axios from 'axios';
import md5 from 'js-md5';

import {InputText} from './styles';

const PUBLIC_KEY = 'c4eac95e8ce3030aa203bf24f964946d';
const PRIVATE_KEY = '9881797562d81e05e53fd04e4060109a2ab179bb';

export default function Search() {
  const [search, setSearch] = useState('');
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(false);

  searchHero = async () => {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${setSearch}&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
      )
      .then(response => {
        console.log(response.data.data.results);
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
        ToastAndroid.show('Não foi possivel buscar', ToastAndroid.LONG);
      });
  };

  return (
    <InputText
      autoCorrect={false}
      autoCapitalize="none"
      value={search}
      onChangeText={setSearch}
      returnKeyType="send"
      onSubmitEditing={searchHero}
    />
  );
}
