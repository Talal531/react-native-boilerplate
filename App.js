import React from 'react';
import {
  Text, View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux'

import Store from './src/store/store';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen!!</Text>
      </View>
    );
  }
}


const App = () => {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
  );
};


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);


export default App;
