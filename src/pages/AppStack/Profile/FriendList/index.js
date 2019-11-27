import React from 'react';

import {
    Container,
    Scroll,
    FriendCard,
    FriendImage,
    FriendName,
    StarIcon,
    FriendLevel,
} from './styles';

export default function FriendList() {
    return (
        <Container>
            <Scroll>
                <FriendCard>
                    <FriendImage
                        source={require('~/assets/images/profile.png')}
                    />
                    <FriendName>Rafael</FriendName>
                    <StarIcon />
                    <FriendLevel>5</FriendLevel>
                </FriendCard>

                <FriendCard>
                    <FriendImage
                        source={require('~/assets/images/profile.png')}
                    />
                    <FriendName>Ester</FriendName>
                    <StarIcon />
                    <FriendLevel>2</FriendLevel>
                </FriendCard>

                <FriendCard>
                    <FriendImage
                        source={require('~/assets/images/profile.png')}
                    />
                    <FriendName>Marcela</FriendName>
                    <StarIcon />
                    <FriendLevel>9</FriendLevel>
                </FriendCard>
            </Scroll>
        </Container>
    );
}
