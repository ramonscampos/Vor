import React, { useState } from 'react';
import { View } from 'react-native';

import {
    Container,
    Menu,
    Header,
    Card,
    AvattarButton,
    Avatar,
    Name,
    Level,
    ExperienceView,
    ExperienceFill,
    ExperienceText,
    AwardsView,
    AwardsScroll,
    AwardImage,
    ModulesScroll,
    Module,
    ModuleName,
    RightCard,
    LessonsCount,
    LessonsText,
    LeftCard,
    Ligature,
    CodeIcon,
    ChallengeCard,
    ChallengeSubCard,
    ChallengeCardFooterButton,
    ChallengeCardFooter,
    FooterText,
    Title,
    Friends,
    Separator,
    ChallengeButton,
    ChallengeButtonText,
    ChallengeIcon,
} from './styles';

export default function Profile({ navigation }) {
    const [challengeFocused, setChallengeFocused] = useState(false);

    return (
        <Container>
            <Header />
            <Menu navigation={navigation} />
            <Card focused={!challengeFocused}>
                <AvattarButton
                    onPress={() => {
                        setChallengeFocused(false);
                    }}
                >
                    <Avatar />
                </AvattarButton>
                <Name>Fernanda</Name>
                <Level>Nível 1</Level>

                <ExperienceView>
                    <ExperienceFill />
                    <ExperienceText>782 XP</ExperienceText>
                </ExperienceView>

                <AwardsView>
                    <AwardsScroll horizontal>
                        <AwardImage
                            source={require('~/assets/images/award1.png')}
                        />

                        <AwardImage
                            source={require('~/assets/images/award2.png')}
                        />

                        <AwardImage
                            source={require('~/assets/images/award3.png')}
                        />

                        <AwardImage
                            source={require('~/assets/images/award1.png')}
                        />

                        <AwardImage
                            source={require('~/assets/images/award2.png')}
                        />

                        <AwardImage
                            source={require('~/assets/images/award3.png')}
                        />
                    </AwardsScroll>
                </AwardsView>
                <ModulesScroll>
                    <Module
                        onPress={() => {
                            navigation.navigate('Learn');
                        }}
                        color="#009cd1"
                    >
                        <CodeIcon />
                        <RightCard>
                            <LessonsCount>16</LessonsCount>
                            <LessonsText>Lições</LessonsText>
                            <ModuleName>Variáveis</ModuleName>
                        </RightCard>
                    </Module>
                    <Ligature />
                    <Module
                        onPress={() => {
                            navigation.navigate('Learn');
                        }}
                        color="rgb(26, 213, 213)"
                    >
                        <CodeIcon />
                        <LeftCard>
                            <LessonsCount>27</LessonsCount>
                            <LessonsText>Lições</LessonsText>
                            <ModuleName>IF</ModuleName>
                        </LeftCard>
                    </Module>
                    <Ligature />
                    <Module
                        onPress={() => {
                            navigation.navigate('Learn');
                        }}
                        color="#009cd1"
                    >
                        <CodeIcon />
                        <RightCard>
                            <LessonsCount>16</LessonsCount>
                            <LessonsText>Lições</LessonsText>
                            <ModuleName>For</ModuleName>
                        </RightCard>
                    </Module>
                    <Ligature />
                    <Module
                        onPress={() => {
                            navigation.navigate('Learn');
                        }}
                        color="rgb(26, 213, 213)"
                    >
                        <CodeIcon />
                        <LeftCard>
                            <LessonsCount>27</LessonsCount>
                            <LessonsText>Lições</LessonsText>
                            <ModuleName>Métodos</ModuleName>
                        </LeftCard>
                    </Module>
                </ModulesScroll>
            </Card>

            <ChallengeCard>
                <ChallengeCardFooterButton
                    onPress={() => {
                        setChallengeFocused(true);
                    }}
                >
                    <View style={{ flex: 1, width: '100%' }}>
                        <ChallengeSubCard>
                            <Title>
                                Desafie seus amigos e/ou a si mesmo e torne o
                                processo de aprendizado muito mais divertido.
                            </Title>
                            <Friends />

                            <Separator />

                            <ChallengeButton
                                onPress={() => {
                                    navigation.navigate('Challenge');
                                }}
                            >
                                <ChallengeIcon />
                                <ChallengeButtonText>
                                    Desafiar-se
                                </ChallengeButtonText>
                            </ChallengeButton>
                        </ChallengeSubCard>
                        <ChallengeCardFooter>
                            <FooterText>Desafio</FooterText>
                        </ChallengeCardFooter>
                    </View>
                </ChallengeCardFooterButton>
            </ChallengeCard>
        </Container>
    );
}
