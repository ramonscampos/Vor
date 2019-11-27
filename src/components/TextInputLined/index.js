import React from 'react';

import { Container, TextInput } from './styles';

export default function TextInputLined({ style, ...rest }) {
    return (
        <Container style={style}>
            <TextInput {...rest} />
        </Container>
    );
}
