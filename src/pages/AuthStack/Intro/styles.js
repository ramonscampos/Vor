import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Img from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background: white;
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['#007ED0', '#00D6D4'],
})`
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding-top: ${ifIphoneX(80, 40)};
    padding-bottom: 40px;
`;

export const HeaderText = styled.Text`
    text-align: center;
    font-size: 28px;
    color: #fff;
`;

export const Spacer = styled.View`
    height: 20px;
    text-align: center;
`;

export const ImageContainer = styled.View`
    padding: 20px;
    flex: 1;
    justify-content: center;
`;

export const ImageRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
`;

export const Image = styled(Img).attrs({
    width: 130,
})`
    align-self: center;
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
