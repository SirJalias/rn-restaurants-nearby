import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import ResultsShowScreen from '../screens/ResultsShowScreen';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator initialRouteName="Search">
    <Screen
      name="Search"
      options={{ title: 'Business Search' }}
      component={SearchScreen}
    />
    <Screen name="ResultsShow" component={ResultsShowScreen} />
  </Navigator>
);
