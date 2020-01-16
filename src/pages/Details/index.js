import React from 'react';

import {
  Container,
  Card,
  ImageCard,
  NameHeroCard,
  DescritionHeroCard,
  ScrollView,
} from './styles';

export default function Details({navigation}) {
  const hero = navigation.getParam('item');

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
