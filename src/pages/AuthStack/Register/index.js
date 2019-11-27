import React from 'react';

import {
    Container,
    Header,
    BgImage,
    Title,
    Content,
    Label,
    Name,
    Email,
    Password,
    TermsView,
    CheckBox,
    TermsText,
    SubmitButton,
    SubmitButtonText,
    CancelButton,
    CancelButtonText,
} from './styles';

export default function Register({ navigation }) {
    return (
        <Container>
            <Header>
                <BgImage />
                <Title>REGISTRAR-SE</Title>
            </Header>
            <Content>
                <Label>Seu nome</Label>
                <Name autoCorrect={false} />

                <Label>Seu email</Label>
                <Email autoCorrect={false} />

                <Label>Crie uma senha</Label>
                <Password secureTextEntry />

                <TermsView>
                    <CheckBox />
                    <TermsText>Eu aceito os termos e condições.</TermsText>
                </TermsView>

                <SubmitButton
                    onPress={() => {
                        navigation.navigate('Intro');
                    }}
                >
                    <SubmitButtonText>CADASTRAR</SubmitButtonText>
                </SubmitButton>
                <CancelButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <CancelButtonText>CANCELAR</CancelButtonText>
                </CancelButton>
            </Content>
        </Container>
    );
}
