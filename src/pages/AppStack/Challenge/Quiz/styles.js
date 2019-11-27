import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 40px 20px;
`;

export const Question = styled.Text`
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
`;

export const AnswerView = styled.TouchableOpacity`
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 10px;
    background: ${props =>
        props.answered ? 'green' : props.wrong ? '#F08080' : '#fff'};
`;

export const AnswerText = styled.Text`
    font-size: 17px;
    color: ${props => (props.answered ? 'white' : '#444')};
`;

export const EndButton = styled.TouchableOpacity`
    background: #201656;
    width: 60%;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: auto;
    margin-bottom: 30px;
`;

export const EndText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const LoaderView = styled.View`
    margin-top: auto;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
`;

export const LoaderFill = styled.View`
    width: 50%;
    height: 10px;
    border-radius: 5px;
    background: #007ed0;
`;
