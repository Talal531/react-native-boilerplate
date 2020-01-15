// import React, {useEffect} from 'react';
// import {
//    View, Button
// } from 'react-native';
// import { Provider } from 'react-redux';
// import { enableScreens } from "react-native-screens";
// import SplashScreen from 'react-native-splash-screen';

// enableScreens();

// import Store from './store/store';
// import { Text } from './components';
// import AppContainer from './navigation/rootNavigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal:20  }}>
//         <Text text="Home Screen" />
//         <Button title="details" onPress={() => this.props.navigation.navigate('Details')} />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Details Screen!!</Text>
//       </View>
//     );
//   }
// }


// const App = () => {
  
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   return (
//     <Provider store={Store}>
//       <AppContainer />
//     </Provider>
//   );
// };



// export default App;

import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import Button from './components_raza/Button/Index';
import Input from './components_raza/Input/Index';
import { Formik } from 'formik';

// const logo = require('../../../assets/logo/logo.png');

export default class Userlogin extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Image source={logo} resizeMode="contain" style={styles.logo} /> */}

        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: ''
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({});
          }}
        >
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Input
              placeholder="EMAIL"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Input
              placeholder="password"
              password
            />
          </View>
          {/* <View style={styles.inputWrapper}>
            <Input
              placeholder="CONFIRM PASSWORD"
              password
            />
          </View> */}
          <Button text="Login" />
        </View>
        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%'
  },
  logo: {
    width: 200
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  inputWrapper: {
    marginBottom: 48,
    width: 180
  }
});

