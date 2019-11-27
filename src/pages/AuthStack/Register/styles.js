import styled from 'styled-components/native';
import Image from 'react-native-scalable-image';
import { Dimensions } from 'react-native';

import TextInputLined from '~/components/TextInputLined';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background: white;
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
    font-size: 35px;
    position: absolute;
    color: #fff;
`;

export const Content = styled.View`
    padding: 40px;
    flex: 1;
`;

export const Label = styled.Text`
    color: #7159c1;
    margin-bottom: 10px;
    font-weight: 500;
`;

export const Name = styled(TextInputLined)`
    margin-bottom: 25px;
`;

export const Email = styled(TextInputLined)`
    margin-bottom: 25px;
`;

export const Password = styled(TextInputLined)`
    margin-bottom: 25px;
`;

export const TermsView = styled.View`
    margin-top: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CheckBox = styled.TouchableOpacity`
    border-color: #333;
    border-width: 1px;
    width: 30px;
    height: 30px;
    border-radius: 2px;
`;

export const TermsText = styled.Text`
    margin-left: 15px;
    color: #333;
    font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-top: auto;
    background: #201656;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    align-items: center;
`;

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const CancelButton = styled.TouchableOpacity`
    background: #999;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const CancelButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
