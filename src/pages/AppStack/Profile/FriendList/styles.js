import styled from 'styled-components/native';
import Image from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
    height: auto;
    width: 100%;
    margin-top: 30px;
`;

export const Scroll = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const FriendCard = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background: #007ed020;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 8px;
`;

export const FriendImage = styled(Image).attrs({
    width: 50,
})``;

export const FriendName = styled.Text`
    margin-left: 10px;
    font-weight: 500;
    font-size: 20px;
`;

export const StarIcon = styled(Icon).attrs({
    name: 'star',
    size: 40,
})`
    color: #ffd27d;
    margin-left: auto;
`;

export const FriendLevel = styled.Text`
    font-weight: bold;
    font-size: 17px;
    left: -26px;
    top: -1px;
`;
