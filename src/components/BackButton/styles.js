import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '~/components/MenuButton';

export const Container = styled.View`
    flex-direction: row;
`;

export const VerticalAlign = styled.View``;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Ionicons).attrs({
    size: 30,
})`
    color: #fff;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin: 5px 10px 10px;
`;

export const MenuButton = styled(Menu)`
    margin-left: auto;
    margin-right: 5px;
`;
