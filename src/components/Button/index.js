import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Background, ButtonText } from './styles';

export default function Button({
    children,
    loading,
    transparent,
    buttonStyle,
    fontStyle,
    ...rest
}) {
    return (
        <Container disabled={loading} {...rest}>
            <Background transparent={transparent} style={buttonStyle}>
                {loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <ButtonText style={fontStyle}>{children}</ButtonText>
                )}
            </Background>
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    transparent: PropTypes.bool,
    loading: PropTypes.bool,
    buttonStyle: PropTypes.shape(),
    fontStyle: PropTypes.shape(),
};

Button.defaultProps = {
    loading: false,
    transparent: false,
    buttonStyle: {},
    fontStyle: {},
};
