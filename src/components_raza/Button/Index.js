import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    width: 90,
    backgroundColor: '#353535',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0
  },
  buttonText: {
    color: 'white'
  }
});

export default Button;