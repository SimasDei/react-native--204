import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { IResult } from '../../types';

export const ResultDetails = ({ result }) => {
  const { name, image_url, rating, review_count }: IResult = result;

  return (
    <View style={styles.constainerStyles}>
      <Image style={styles.imageStyles} source={{ uri: image_url }} />
      <Text style={styles.nameStyles}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainerStyles: {
    marginLeft: 16,
  },
  imageStyles: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  nameStyles: {
    fontWeight: 'bold',
  },
});

export default ResultDetails;
