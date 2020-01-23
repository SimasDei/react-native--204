import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SearchBar } from '../components/UI';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onEndEditing={() => console.log('Submitted')}
      />
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
