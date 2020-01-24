import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import { yelp } from '../api';
import { IResult } from '../types';

export const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id: IResult['id']) => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;
  const { photos }: IResult = result;

  return (
    <View>
      <Text>Result Screen {id}</Text>
      <FlatList
        data={photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
