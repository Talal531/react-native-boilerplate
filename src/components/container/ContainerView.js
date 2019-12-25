import React from 'react';
import { SafeAreaView } from 'react-native';

import PropTypes from 'prop-types';

import { spacing } from '../../theme';

const CONTAINER = {
    padding: spacing[4],
    background: 'red'
  }

const ContainerView = props => {
    const {  children, ...rest } = props;   
    return (
        <SafeAreaView {...rest} style={CONTAINER}>
            {children}
        </SafeAreaView>
    )
}

ContainerView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default ContainerView;
