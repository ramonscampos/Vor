import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import {
    Container,
    Header,
    Logo,
    Menu,
    MenuItem,
    MenuItemIcon,
    MenuItemText,
    Footer,
    LogoutButton,
    LogoutButtonText,
    LogoutButtonIcon,
} from './styles';

export default function SideMenu({ navigation }) {
    const dispatch = useDispatch();
    const logo = require('~/assets/images/logo.png');

    function handleLogout() {
        dispatch(AuthActions.logout());
    }

    return (
        <Container>
            <Header>
                <Logo source={logo} />
            </Header>

            <Menu>
                <MenuItem
                    onPress={() => {
                        navigation.navigate('LoggedTheme');
                    }}
                >
                    <MenuItemIcon name="format-list-bulleted" />
                    <MenuItemText>Selecionar matérias</MenuItemText>
                </MenuItem>
            </Menu>

            <Footer>
                <LogoutButton onPress={handleLogout}>
                    <LogoutButtonText>Sair</LogoutButtonText>
                    <LogoutButtonIcon name="logout" />
                </LogoutButton>
            </Footer>
        </Container>
    );
}
