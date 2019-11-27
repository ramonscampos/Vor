import styled from 'styled-components/native';
import Image from 'react-native-scalable-image';
import TextInputRounded from '~/components/TextInputRounded';

export const Container = styled.View`
    flex: 1;
    background: white;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const Logo = styled(Image).attrs({
    source: require('~/assets/images/logo.png'),
    width: 150,
})`
    margin-bottom: 60px;
`;

export const Card = styled.View`
    background: #fff;
    width: 100%;
    padding: 20px;
    border-radius: 15px;
    align-items: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const WelcomeTitle = styled.Text`
    font-weight: 600;
    font-size: 40px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    font-weight: 400;
`;

export const Email = styled(TextInputRounded).attrs({
    placeholderTextColor: '#888',
})`
    margin-top: 30px;
    width: 80%;
`;

export const Password = styled(TextInputRounded).attrs({
    placeholderTextColor: '#888',
})`
    margin: 20px 0 0;
    width: 80%;
`;

export const RecoverPasswordButton = styled.TouchableOpacity`
    margin-bottom: 25px;
`;

export const RecoverPasswordButtonText = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    font-weight: 400;
`;

export const SubmitButton = styled.TouchableOpacity`
    background: #201656;
    width: 60%;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    bottom: -20px;
    justify-content: center;
    align-items: center;
`;

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const RegisterView = styled.View`
    margin-top: 70px;
    flex-direction: row;
`;

export const RegisterText = styled.Text`
    font-size: 18px;
    color: #333;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const RegisterButtonText = styled.Text`
    font-size: 18px;
    margin-left: 3px;
    font-weight: bold;
    color: #333;
`;
