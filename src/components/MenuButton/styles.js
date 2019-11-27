import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs({
    size: 32,
})`
    color: #fff;
`;
