import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    Header,
    BackButton,
    BackIcon,
    BgImage,
    Title,
    Content,
    Cards,
    Card,
    CardText,
    SubmitButton,
    SubmitButtonText,
} from './styles';

import { Creators as AuthActions } from '~/store/ducks/auth';

const themesArray = [
    { id: 0, isSelected: false, name: 'Matemática' },
    { id: 1, isSelected: false, name: 'Ciência' },
    { id: 2, isSelected: false, name: 'Inglês' },
    { id: 3, isSelected: false, name: 'Sociologia' },
    { id: 4, isSelected: false, name: 'História' },
    { id: 5, isSelected: false, name: 'Geografia' },
    { id: 6, isSelected: false, name: 'Biologia' },
    { id: 7, isSelected: false, name: 'Química' },
    { id: 8, isSelected: false, name: 'Português' },
    { id: 9, isSelected: false, name: 'Física' },
    { id: 10, isSelected: false, name: 'Literatura' },
];

export default function ThemeSelector({ navigation }) {
    const dispatch = useDispatch();
    const isLogged = useSelector(store => store.auth.isLogged);
    const [themes, setThemes] = useState(themesArray);

    function selectTheme(theme) {
        setThemes(
            themes.map(x =>
                x.id === theme.id ? { ...x, isSelected: !x.isSelected } : x
            )
        );
    }

    function login() {
        dispatch(AuthActions.setLogged());
    }

    return (
        <Container>
            <Header>
                {isLogged && (
                    <BackButton
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <BackIcon />
                    </BackButton>
                )}
                <BgImage />
                <Title>Selecione suas matérias preferidas</Title>
            </Header>
            <Content>
                <Cards>
                    {themes.map(x => (
                        <Card
                            onPress={() => {
                                selectTheme(x);
                            }}
                            isSelected={x.isSelected}
                            key={x.id.toString()}
                        >
                            <CardText isSelected={x.isSelected}>
                                {x.name}
                            </CardText>
                        </Card>
                    ))}
                </Cards>
                {!isLogged && (
                    <SubmitButton onPress={login}>
                        <SubmitButtonText>PRÓXIMO</SubmitButtonText>
                    </SubmitButton>
                )}
            </Content>
        </Container>
    );
}
