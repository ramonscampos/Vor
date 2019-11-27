import styled from 'styled-components/native';
import carousel from 'react-native-looped-carousel';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Carousel = styled(carousel).attrs({
    isLooped: false,
    swipe: false,
    autoplay: false,
})`
    flex: 1;
`;

export const Card = styled.View`
    background: #fff;
    width: 90%;
    flex: 1;
    margin: 100px 0;
    border-radius: 15px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    height: 60px;
    border-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 2px;
    flex-direction: row;
`;

export const PagesButton = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background: ${props =>
        props.current ? '#aaa' : props.past ? '#ddd' : '#fff'};

    border-color: rgba(0, 0, 0, 0.3);
    border-width: ${props => (!props.past && !props.current ? '1px' : 0)};
`;

export const PagesText = styled.Text``;

export const NextButton = styled.TouchableOpacity`
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

export const NextText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const DescriptionCard = styled.View`
    flex: 1;
    padding: 40px 20px;
`;

export const DescriptionText = styled.Text`
    color: #333;
    font-size: 24px;
    text-align: center;
`;

export const CancelButton = styled.TouchableOpacity`
    position: absolute;
    top: -10px;
    right: -8;
    background: white;
    border-color: rgba(255, 0, 0, 0.5);
    border-width: 3px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 30px;
`;

export const CancelText = styled.Text`
    color: rgba(255, 0, 0, 0.5);
    font-weight: bold;
    font-size: 18px;
    top: -1px;
`;
