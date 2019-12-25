import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginContainer, CreateAccountContainer } from '../screens';

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginContainer,
    },
    CreateAccount: {
        screen: CreateAccountContainer,
        navigationOptions: {
            headerTitle: 'Create Account'
        }
    }
  }, {
      defaultNavigationOptions: ({navigation}) => {
          return {
              headerTitle: navigation.state.routeName
          }
      }
  });
  
  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;
  