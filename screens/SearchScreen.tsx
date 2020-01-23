// @ts-nocheck

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useSearch } from '../hooks';

import { SearchBar } from '../components/UI';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useSearch();

  return (
    <View style={styles.container}>
      <SearchBar term={term} onTermChange={setTerm} onEndEditing={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length ? <Text>Found {results.length} restaurants 🍽</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SearchScreen;
