import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';

import { Button, Icon } from './styles';

export default function MenuButton({ navigation, ...rest }) {
    function toggleDrawer() {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <Button {...rest} onPress={toggleDrawer}>
            <Icon name="menu" />
        </Button>
    );
}
