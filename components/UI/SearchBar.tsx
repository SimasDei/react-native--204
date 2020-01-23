import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

type SearchScreen = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onEndEditing: () => void;
};

export const SearchBar = ({ term, onTermChange, onEndEditing }: SearchScreen) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onEndEditing}
        style={styles.inputStyle}
        placeholder={'Search'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 12,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 16,
  },
});

export default SearchBar;
