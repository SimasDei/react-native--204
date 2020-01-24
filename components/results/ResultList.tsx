import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { IResults, IResult } from '../../types';

import { ResultDetails } from './ResultDetails';

type Item = {
  item: IResult;
};

export const ResultList = ({ title, results, navigate }: IResults) => {
  return (
    <View style={styles.containerStyles}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result: IResult) => result.id}
        renderItem={({ item }: Item) => (
          <TouchableOpacity onPress={() => navigate('Result', { id: item.id })}>
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
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

export default withNavigation(ResultList);
