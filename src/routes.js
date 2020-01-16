import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main/index';
import Details from './pages/Details/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Details,
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  ),
);

export default Routes;
