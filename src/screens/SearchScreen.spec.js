import React from 'react';
import SearchScreen from './SearchScreen';
import { render, fireEvent } from '@testing-library/react-native';
import useSearchRestaurants from '../hooks/useSearchRestaurants';
const searchApi = jest.fn();

jest.mock('../hooks/useSearchRestaurants');
jest.mock('../components/ResultsList', () => () => <></>);

test('Screens -> SearchScreen', async () => {
  useSearchRestaurants.mockReturnValue({
    searchApi,
    errorMessage: '',
    restaurants: [],
  });
  const renderProps = render(<SearchScreen />);

  const { getByPlaceholderText } = renderProps;

  const famousWomanInHistory = 'Ada Lovelace';

  expect(searchApi).toHaveBeenCalledTimes(0);
  const input = getByPlaceholderText('Search');
  fireEvent.changeText(input, famousWomanInHistory);

  fireEvent.submitEditing(input);

  expect(searchApi).toHaveBeenCalledWith(famousWomanInHistory);
});
