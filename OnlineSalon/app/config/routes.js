import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

/**
 * Config the routes navigations
 * available to this APP
 */

import Language from '../screens/Language';
import Login from '../screens/Login';
import Authorization from '../screens/Authorization';
import SignIn from '../screens/SignIn';

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
      Authorization: {
        screen: Authorization,
        navigationOptions: {
          header: () => null,
          headerTitle: 'Authorization',
        },
      },
      SignIn: {
        screen: SignIn,
        navigationOptions: {
          header: () => null,
          headerTitle: 'SignIn',
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
