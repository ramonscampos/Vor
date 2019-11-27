import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { colors, fontSize } from '~/styles';

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
    width: 100%;
`;

export const Background = styled(LinearGradient).attrs(({ transparent }) => ({
    colors: !transparent
        ? [colors.secundary, colors.primary]
        : [colors.transparent, colors.transparent],
}))`
    height: 35px;
    border-radius: 4px;

    border-width: ${props => (props.transparent ? 1 : 0)};
    border-color: ${colors.light};

    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.light};
    font-weight: 700;
    font-size: ${fontSize.regular}px;
    font-size: ${width / 21}px;
    font-family: 'Roboto-Regular';
`;
