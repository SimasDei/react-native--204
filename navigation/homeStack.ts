import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SearchScreen } from '../screens';

const screens = {
  Search: {
    screen: SearchScreen,
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
