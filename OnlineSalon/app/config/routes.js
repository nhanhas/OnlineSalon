import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

/**
 * Config the routes navigations
 * available to this APP
 */

import Language from '../screens/Language';
import Login from '../screens/Login';
import Options from '../screens/Options';

//Login Stack
const LoginStack = StackNavigator(
  {
    Language: {
      screen: Language,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Language',
      },
    },
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
    Language: {
      screen: LoginStack,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
