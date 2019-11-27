import React from 'react';

import Background from '~/components/Background';
import {
    Container,
    Content,
    Logo,
    Card,
    WelcomeTitle,
    SubTitle,
    Email,
    Password,
    RecoverPasswordButton,
    RecoverPasswordButtonText,
    SubmitButton,
    SubmitButtonText,
    RegisterView,
    RegisterText,
    RegisterButton,
    RegisterButtonText,
} from './styles';

export default function Login({ navigation }) {
    return (
        <Container>
            <Background>
                <Content>
                    <Logo />
                    <Card>
                        <WelcomeTitle>BEM-VINDO</WelcomeTitle>
                        <SubTitle>Entre na sua conta!</SubTitle>

                        <Email placeholder="Email" />

                        <Password placeholder="Senha" />

                        <RecoverPasswordButton>
                            <RecoverPasswordButtonText>
                                Esqueceu sua senha?
                            </RecoverPasswordButtonText>
                        </RecoverPasswordButton>

                        <SubmitButton
                            onPress={() => {
                                navigation.navigate('Intro');
                            }}
                        >
                            <SubmitButtonText>ENTRAR</SubmitButtonText>
                        </SubmitButton>
                    </Card>

                    <RegisterView>
                        <RegisterText>Não possui uma conta?</RegisterText>
                        <RegisterButton
                            onPress={() => {
                                navigation.navigate('Register');
                            }}
                        >
                            <RegisterButtonText>
                                Clique aqui!
                            </RegisterButtonText>
                        </RegisterButton>
                    </RegisterView>
                </Content>
            </Background>
        </Container>
    );
}
