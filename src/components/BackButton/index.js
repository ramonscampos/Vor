import React from 'react';
import PropTypes from 'prop-types';

import { Container, VerticalAlign, Button, Icon, Title } from './styles';

export default function BackButton({ navigation, title, ...rest }) {
    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container {...rest}>
            <VerticalAlign>
                <Button onPress={handleBack}>
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title>{title}</Title>
            </VerticalAlign>
        </Container>
    );
}

BackButton.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func,
    }).isRequired,
    title: PropTypes.string.isRequired,
};
