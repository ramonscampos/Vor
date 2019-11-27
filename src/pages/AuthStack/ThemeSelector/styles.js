import styled from 'styled-components/native';
import Image from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background: white;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 5px;
    top: ${ifIphoneX(75, 40)};
    z-index: 1;
`;

export const BackIcon = styled(Icon).attrs({
    name: 'chevron-left',
    size: 50,
})`
    color: #fff;
`;
export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const BgImage = styled(Image).attrs({
    source: require('~/assets/images/Vector.png'),
    width: width + 10,
    height: 1000,
})`
    top: -30;
`;

export const Title = styled.Text`
    font-size: 28px;
    position: absolute;
    color: #fff;
    text-align: center;
`;

export const Content = styled.View`
    padding: 40px;
    flex: 1;
`;

export const Cards = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    border-color: #007ed0;
    background: ${props => (props.isSelected ? '#007ed0' : 'transparent')};
    border-width: 3px;
    padding: 10px;
    border-radius: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
    flex-grow: 1;
    align-items: center;
`;

export const CardText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${props => (props.isSelected ? '#fff' : '#000')};
    font-weight: ${props => (props.isSelected ? 'bold' : '500')};
`;

export const SubmitButton = styled.TouchableOpacity`
    background: #201656;
    width: 60%;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: auto;
    margin-bottom: 50px;
`;

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
