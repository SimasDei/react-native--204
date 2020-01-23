import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { IResults, IResult } from '../../types';

import { ResultDetails } from './';

type Item = {
  item: IResult;
};

export const ResultList = ({ title, results }: IResults) => {
  return (
    <View style={styles.containerStyles}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result: IResult) => result.id}
        renderItem={({ item }: Item) => <ResultDetails result={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 5,
  },
  containerStyles: {
    marginBottom: 10,
  },
});

export default ResultList;
