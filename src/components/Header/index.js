import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Animated, Keyboard } from 'react-native';

import {
    Container,
    Logo,
    Menu,
    SearchBox,
    SearchIcon,
    Icon,
    SearchButton,
    InputView,
    TextInput,
    DateInput,
    CloseButton,
    CloseIcon,
} from './styles';

export default function Header({ navigation, translateY }) {
    const [searchOpened, setSearchOpened] = useState(false);
    const [searchText, setSearchText] = useState(null);
    const [searchDate, setSearchDate] = useState(null);

    useEffect(() => {
        if (!searchOpened) {
            Keyboard.dismiss();
            setSearchText(null);
            setSearchDate(null);
        }
    }, [searchOpened]);

    function toggleSearch() {
        Animated.timing(translateY, {
            toValue: searchOpened ? 0 : 127,
            duration: 200,
            useNativeDriver: true,
        }).start();

        setSearchOpened(!searchOpened);
    }

    function handleSearch() {}

    return (
        <>
            <Container>
                <SearchIcon onPress={toggleSearch}>
                    <Icon name="search" />
                </SearchIcon>
                <Logo />
                <Menu navigation={navigation} />
            </Container>
            <SearchBox
                style={{
                    opacity: translateY.interpolate({
                        inputRange: [0, 20, 127],
                        outputRange: [0, 0, 1],
                        extrapolate: 'clamp',
                    }),
                }}
            >
                <InputView>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Festa / Casa"
                        returnKeyType="done"
                        returnKeyLabel="Pesquisar"
                        value={searchText}
                        onChangeText={value => {
                            setSearchText(value);
                        }}
                        onSubmitEditing={handleSearch}
                    />
                    {!!searchText && (
                        <CloseButton
                            onPress={() => {
                                setSearchText(null);
                            }}
                        >
                            <CloseIcon name="close-circle" />
                        </CloseButton>
                    )}
                </InputView>

                <InputView>
                    <DateInput
                        type="datetime"
                        options={{
                            format: 'DD/MM',
                        }}
                        placeholder="Data (dd/mm)"
                        keyboardType="numbers-and-punctuation"
                        returnKeyType="next"
                        returnKeyLabel="Próximo"
                        value={searchDate}
                        onChangeText={text => {
                            setSearchDate(text);
                        }}
                        maxLength={10}
                        onSubmitEditing={handleSearch}
                    />
                    {!!searchDate && (
                        <CloseButton
                            onPress={() => {
                                setSearchDate(null);
                            }}
                        >
                            <CloseIcon name="close-circle" />
                        </CloseButton>
                    )}
                </InputView>

                <SearchButton
                    style={{ opacity: !searchText && !searchDate ? 0.5 : 1 }}
                    disabled={!searchText && !searchDate}
                >
                    BUSCAR
                </SearchButton>
            </SearchBox>
        </>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    }).isRequired,
    translateY: PropTypes.shape().isRequired,
};
