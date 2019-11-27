import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Image from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';

import FriendList from './FriendList';

import MenuButton from '~/components/MenuButton';

export const Container = styled.View`
    flex: 1;
    background: white;
`;

export const Menu = styled(MenuButton)`
    position: absolute;
    top: ${ifIphoneX(60, 40)};
    right: 30px;
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['#007ED0', '#00D6D4'],
})`
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 30%;
    padding-top: ${ifIphoneX(80, 40)};
    padding-bottom: 40px;
`;

export const Card = styled.View`
    background: #fff;
    left: 20px;
    top: ${ifIphoneX(120, 100)};
    width: 90%;
    height: 78%;
    position: absolute;
    border-radius: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    align-items: center;
    z-index: ${props => (!props.focused ? 0 : 5)};
`;

export const AvattarButton = styled.TouchableWithoutFeedback``;

export const Avatar = styled(Image).attrs({
    source: require('~/assets/images/fox.png'),
    width: 80,
})`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    top: -50px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: -50px;
`;

export const Name = styled.Text`
    margin-top: 10px;
    font-size: 17px;
`;

export const Level = styled.Text`
    margin-top: 10px;
    font-size: 15px;
`;

export const ExperienceView = styled.View`
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    width: 70%;
    height: 30px;
    margin-top: 5px;
    border-radius: 15px;
    justify-content: center;
`;

export const ExperienceFill = styled.View`
    width: 50%;
    height: 28px;
    border-radius: 15px;
    background: #009cd1;
    position: absolute;
`;

export const ExperienceText = styled.Text`
    color: #fff;
    font-size: 18px;
    align-self: center;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

export const AwardsView = styled.View`
    width: 90%;
    margin-top: 20px;
`;

export const AwardsScroll = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const AwardImage = styled(Image)`
    margin-right: 15px;
`;

export const ModulesScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 50 },
})`
    flex: 1;
    width: 100%;
    margin-top: 20px;
`;

export const Module = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border-color: #ddd;
    border-width: 3px;
    align-self: center;
    background: ${props => props.color};
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const Ligature = styled.View`
    height: 70px;
    border-color: #333;
    border-width: 3px;
    align-self: center;
    border-style: dotted;
    z-index: 1;
`;

export const LeftCard = styled.View`
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    width: 100px;
    height: 60px;
    position: absolute;
    left: -115px;
    border-radius: 4px;
`;

export const RightCard = styled.View`
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    width: 100px;
    height: 60px;
    position: absolute;
    right: -115px;
    border-radius: 4px;
`;

export const ModuleName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    width: 100px;
    border-width: 2px;
    border-color: rgba(0, 0, 0, 0.3);
    padding: 1px 10px;
    border-radius: 8px;
    bottom: -35px;
`;

export const LessonsCount = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding-top: 6px;
`;

export const LessonsText = styled.Text`
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    margin-top: auto;
    text-align: center;
    padding: 2px;
    font-weight: bold;
`;

export const CodeIcon = styled(Icon).attrs({
    name: 'code-braces',
    size: 35,
})`
    color: #fff;
    left: 0.5px;
    top: 1px;
`;

export const ChallengeCard = styled.View`
    background: #fff;
    left: 20px;
    top: ${ifIphoneX(140, 120)};
    width: 90%;
    height: 80%;
    position: absolute;
    border-radius: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    align-items: center;
    z-index: 2;
`;

export const ChallengeSubCard = styled.View`
    background: #fff;
    width: 100%;
    height: 94%;
    position: absolute;
    border-radius: 20px;
    align-items: center;
    z-index: 2;
    padding: 15px;
`;

export const ChallengeCardFooterButton = styled.TouchableWithoutFeedback``;

export const ChallengeCardFooter = styled(LinearGradient).attrs({
    colors: ['#00D6D4', '#007ED0'],
})`
    width: 100%;
    height: 70px;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const FooterText = styled.Text`
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    top: 15px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 500;
    top: 10px;
    color: #007ed0;
    text-align: center;
`;

export const Friends = styled(FriendList)``;

export const Separator = styled.View`
    width: 100%;
    height: 2px;
    background: #007ed020;
    margin: 15px 0;
    margin-top: auto;
`;

export const ChallengeButton = styled.TouchableOpacity`
    border-width: 2px;
    background: #fff;
    border-color: #007ed0;
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const ChallengeButtonText = styled.Text`
    color: #007ed0;
    font-weight: bold;
    font-size: 18px;
`;

export const ChallengeIcon = styled(Material).attrs({
    name: 'question-answer',
    size: 30,
})`
    color: #007ed0;
    margin-right: 10px;
`;
