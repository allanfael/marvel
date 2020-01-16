import React from 'react';

import {
  Container,
  Card,
  ImageCard,
  NameHeroCard,
  DescritionHeroCard,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

export default function Details({navigation}) {
  const hero = navigation.getParam('item');
  console.log(hero);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <ImageCard
            source={{
              uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
            }}
          />
          <NameHeroCard>{JSON.stringify(hero.name)}</NameHeroCard>
          <DescritionHeroCard>
            {JSON.stringify(hero.description)}
          </DescritionHeroCard>
        </Card>
      </ScrollView>
    </Container>
  );
}
