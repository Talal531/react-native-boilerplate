import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import { spacing } from '../../theme';

const CONTAINER = {
    padding: spacing[4],
    background: 'red'
  }

const ContainerView = props => {
    const {  children, ...rest } = props;   
    return (
        <View {...rest} style={CONTAINER}>
            {children}
        </View>
    )
}

ContainerView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default ContainerView;
