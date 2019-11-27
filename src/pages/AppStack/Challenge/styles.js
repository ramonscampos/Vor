import styled from 'styled-components/native';
import carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

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

export const FinishButton = styled.TouchableOpacity`
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

export const FinishText = styled.Text`
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

export const FinalCard = styled(Icon).attrs({
    name: 'menu',
    size: 25,
})`
    top: 1.5px;
    left: 2.5px;
    position: absolute;
`;

export const ResultCard = styled.View`
    flex: 1;
    padding: 40px 20px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
`;

export const ScoreView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 70px 0 50px 0;
`;

export const ScoreTitleView = styled(LinearGradient).attrs({
    colors: ['#007ed0', '#00d6d4'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    background: #007ed0;
    padding: 10px 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
`;

export const ScoreTitleText = styled.Text`
    font-weight: bold;
    font-size: 25px;
    color: #fff;
`;

export const ScoreValueView = styled.View`
    background: #00d6d4;
    padding: 10px 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ScoreValueText = styled.Text`
    font-weight: bold;
    font-size: 25px;
    color: #fff;
`;

export const ResultCardView = styled.View`
    flex-direction: row;
    padding: 40px;
    justify-content: space-around;
`;

export const CorrectCard = styled.View`
    border-width: 3px;
    border-color: #eee;
    border-radius: 8px;
    width: 90px;
    justify-content: center;
    align-items: center;
`;

export const CorrectCardText = styled.Text`
    font-size: 28px;
    margin: 10px 20px;
    margin-bottom: 0;
`;

export const CorrectCardTitle = styled.Text`
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin-top: 10px;
`;

export const WrongCard = styled.View`
    border-width: 3px;
    border-color: #eee;
    border-radius: 8px;
    width: 90px;
    justify-content: center;
    align-items: center;
`;
export const WrongCardText = styled.Text`
    font-size: 28px;
    margin: 10px 20px;
    margin-bottom: 0;
`;

export const WrongCardTitle = styled.Text`
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin-top: 10px;
`;
