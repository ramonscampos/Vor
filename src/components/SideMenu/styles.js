import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-scalable-image';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#00D6D4', '#007ED0'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
`;

export const Header = styled.View`
    border-bottom-width: 1px;
    border-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    padding-top: ${ifIphoneX(45, 30)};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled(Image).attrs({
    width: 50,
})``;

export const Email = styled.Text``;

export const Name = styled.Text`
    color: #fff;
    font-size: 16;
    font-weight: bold;
    top: 2px;
`;

export const Menu = styled.View`
    flex: 1;
`;

export const MenuItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: flex-end;
    padding: 0 15px;
    margin-top: 15px;
`;

export const MenuItemIcon = styled(Icon).attrs({
    size: 22,
})`
    color: #fff;
    margin-right: 5px;
    top: 2px;
`;

export const MenuItemText = styled.Text`
    color: #fff;
    font-size: 16px;
    bottom: 1px;
    font-weight: 600;
`;

export const Footer = styled.View`
    margin-top: auto;
    border-top-width: 1px;
    border-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    padding-bottom: ${ifIphoneX(30, 15)};
`;

export const LogoutButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
`;

export const LogoutButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const LogoutButtonIcon = styled(Icon).attrs({
    size: 30,
})`
    color: #fff;
    margin-left: 10px;
`;
