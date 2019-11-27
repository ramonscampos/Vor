import React from 'react';

import { Container, TextInput } from './styles';

export default function TextInputRounded({ style, ...rest }) {
    return (
        <Container style={style}>
            <TextInput {...rest} />
        </Container>
    );
}
