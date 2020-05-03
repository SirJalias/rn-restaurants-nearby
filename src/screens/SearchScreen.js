import React, { useState } from 'react';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useSearchRestaurants from '../hooks/useSearchRestaurants';

const SearchScreen = () => {
  const [term, onTermChange] = useState('');
  const {
    errorMessage,
    restaurants,
    searchApi,
    loading,
  } = useSearchRestaurants();

  const filterResultsByPrice = (price) => {
    return restaurants.filter(
      ({ price: rPrice }) => rPrice?.length === price.length
    );
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length ? <Text>{errorMessage}</Text> : null}
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title="Extra Expensive"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
