import React from 'react'
import { View, Button } from 'react-native';

import { Text } from '../../components';
import ContainerView from '../../components/container/ContainerView';

const LoginComponent = props => {
    const { handlePress } = props;
    return (
        <ContainerView>
            <Text>Login Component!</Text>
            <Button title="Create Account" onPress={handlePress} />
        </ContainerView>
    )
}

export default LoginComponent;
