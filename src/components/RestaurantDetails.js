import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantDetails = ({
  restaurant: { name, image_url, rating, review_count },
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{rating} Stars,</Text>
        <Text style={styles.footerText}>{review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default RestaurantDetails;
