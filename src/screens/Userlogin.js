import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

// const logo = require('../../../assets/logo/logo.png');

export default class Userlogin extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Image source={logo} resizeMode="contain" style={styles.logo} /> */}
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Input
              placeholder="EMAIL"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Input
              placeholder="PASSWORD"
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
