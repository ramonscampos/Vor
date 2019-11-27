import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Octicons from 'react-native-vector-icons/Octicons';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-scalable-image';
import MenuButton from '~/components/MenuButton';
import Button from '~/components/Button';
import { fontSize, colors } from '~/styles';

const { width } = Dimensions.get('window');

const letteringLogo = require('~/assets/images/lettering-logo.png');

export const Container = styled.View`
    padding: 0 20px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled(MenuButton)``;

export const Logo = styled(Image).attrs({
    source: letteringLogo,
    height: 30,
})``;

export const SearchBox = styled(Animated.View)`
    margin: 0 10px 10px;
    position: absolute;
    width: ${width - 20};
    top: ${ifIphoneX(101, 87)};
`;

export const SearchIcon = styled.TouchableOpacity``;

export const Icon = styled(Octicons).attrs({
    size: 28,
})`
    color: #fff;
`;

export const SearchButton = styled(Button).attrs({
    buttonStyle: { height: 25 },
    fontStyle: { fontSize: fontSize.regular },
})`
    width: 90px;
    align-self: flex-end;
    margin-top: 5px;
`;

export const InputView = styled.View`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    margin-bottom: 5px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: colors.light,
    selectionColor: colors.light,
})`
    font-family: 'Roboto-Regular';
    height: 38px;
    color: ${colors.light};
    font-size: ${fontSize.large};
    padding-left: 10px;
`;

export const DateInput = styled(TextInputMask).attrs({
    placeholderTextColor: colors.light,
    selectionColor: colors.light,
})`
    font-family: 'Roboto-Regular';
    height: 38px;
    color: ${colors.light};
    font-size: ${fontSize.large};
    padding-left: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    right: 5px;
    top: 8px;
`;

export const CloseIcon = styled(MCIcon).attrs({ size: 20 })`
    color: ${colors.dark};
`;
