import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

/**
 * Config the routes navigations
 * available to this APP
 */

import Login from '../screens/Login';
import Options from '../screens/Options';

//Login Stack
const LoginStack = StackNavigator(
  {
    Login: {
        screen: Login,
        navigationOptions: {
          header: () => null,
          headerTitle: 'Login',
        },
      },
      Options: {
        screen: Options,
        navigationOptions: {
          headerTitle: 'Options',
        },
      }
  },
  {
    headerMode: 'screen',
  },
);


/**
 * Here we define all the stacks available
 */
export default StackNavigator(
  {
    Login: {
      screen: LoginStack,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
