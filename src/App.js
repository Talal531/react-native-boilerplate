import React from 'react';
import {
   View, Button
} from 'react-native';
import { Provider } from 'react-redux';
import { enableScreens } from "react-native-screens";


enableScreens();

import Store from './store/store';
import { Text } from './components';
import AppContainer from './navigation/rootNavigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal:20  }}>
        <Text text="Home Screen" />
        <Button title="details" onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen!!</Text>
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



export default App;
