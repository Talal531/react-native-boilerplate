import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={props.password}
        underlineColorAndroid="rgba(0,0,0,0)"
        style={styles.input}
        autoCapitalize="none"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  password: PropTypes.bool,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1
  },
  input: {
    textAlign: 'center',
    height: 50
  }
});

export default Input;