// @ts-nocheck

import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import { useSearch } from '../hooks';
import { IParsedResults, IResult } from '../types';

import { SearchBar } from '../components/UI';
import { ResultList } from '../components/results';

export const SearchScreen = ({ navigation: { navigate } }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useSearch();

  const filterResultsByPrice = (price: string) => {
    return results.filter((result: IResult) => result.price === price);
  };

  const parsedResults = () => {
    const priceRange = [
      { price: '$', title: 'On a Budget' },
      { price: '$$', title: '`A la Carte' },
      { price: '$$$', title: 'Money is no object' },
      { price: '$$$$', title: 'Mama mia!' },
    ];
    const parsedResults: IParsedResults[] = [];

    priceRange.forEach(({ price, title }) => {
      const result = filterResultsByPrice(price);
      parsedResults.push({
        title,
        price,
        results: result,
      });
    });

    return parsedResults;
  };

  const renderResults = () => {
    const gerParsedResults = parsedResults();
    if (!gerParsedResults) return null;

    return gerParsedResults.map(({ price, title, results }) => {
      if (results.length) {
        return <ResultList title={title} results={results} key={price} navigate={navigate} />;
      }
    });
  };

  const wasFound = () => {
    const quantity = results.length;

    return (
      <Text style={styles.wasFound}>
        {quantity ? `Found ${quantity} restaurants 🍔🍕🍟` : 'no restaurants found 😥'}
      </Text>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar term={term} onTermChange={setTerm} onEndEditing={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {wasFound()}
      {renderResults()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wasFound: {
    alignSelf: 'center',
    marginTop: 4,
  },
});

export default SearchScreen;
