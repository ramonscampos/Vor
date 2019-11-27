import React from 'react';

import {
    Container,
    Header,
    HeaderText,
    Spacer,
    ImageRow,
    ImageContainer,
    Image,
    SubmitButton,
    SubmitButtonText,
} from './styles';

export default function Intro({ navigation }) {
    return (
        <Container>
            <Header>
                <HeaderText>Olá, seja bem vindo ao Vör.</HeaderText>
                <Spacer />
                <HeaderText>
                    Aqui você encontrará conceitos de programação ligados aos
                    assuntos de seu interesse
                </HeaderText>
            </Header>
            <ImageContainer>
                <ImageRow>
                    <Image source={require('~/assets/images/doc.png')} />
                    <Image source={require('~/assets/images/phone.png')} />
                </ImageRow>
                <Image source={require('~/assets/images/mind.png')} />
            </ImageContainer>

            <SubmitButton
                onPress={() => {
                    navigation.navigate('Theme');
                }}
            >
                <SubmitButtonText>PRÓXIMO</SubmitButtonText>
            </SubmitButton>
        </Container>
    );
}
