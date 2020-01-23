// @ts-nocheck

import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import { useSearch } from '../hooks';

import { SearchBar } from '../components/UI';
import { ResultList } from '../components/results';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useSearch();

  const filterResultsByPrice = (price: string) => {
    return results.filter((result: object) => result.price === price);
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar term={term} onTermChange={setTerm} onEndEditing={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length ? (
        <Text style={styles.wasFound}>Found {results.length} restaurants 🍽</Text>
      ) : null}

      <ResultList title={'On a Budget'} results={filterResultsByPrice('$')} />
      <ResultList title={'`A la Carte'} results={filterResultsByPrice('$$')} />
      <ResultList title={'Money is no object'} results={filterResultsByPrice('$$$')} />
      <ResultList title={'Mama mia!'} results={filterResultsByPrice('$$$$')} />
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
