import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import useGetRestaurant from '../hooks/useGetRestaurant';
const ResultsShowScreen = ({
  route: {
    params: { id },
  },
}) => {
  const { loading, restaurant, errorMessage } = useGetRestaurant(id);

  if (!restaurant?.photos.length) {
    return null;
  }

  return (
    <View>
      <Text>{restaurant?.name}</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          keyExtractor={(item) => item}
          data={restaurant?.photos}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      )}
      {errorMessage.length ? <Text>{loading}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
  },
});

export default ResultsShowScreen;
