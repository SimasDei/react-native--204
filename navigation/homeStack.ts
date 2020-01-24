import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SearchScreen, ResultsShowScreen } from '../screens';

const screens = {
  Search: {
    screen: SearchScreen,
  },
  Result: {
    screen: ResultsShowScreen,
  },
};

const config = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
  },
};

export const navigator = createStackNavigator(screens, config);

export const AppContainer = createAppContainer(navigator);
