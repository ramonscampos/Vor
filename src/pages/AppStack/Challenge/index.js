import React, { useState, useRef } from 'react';

import {
    Container,
    Carousel,
    Card,
    Header,
    PagesButton,
    PagesText,
    FinishButton,
    FinishText,
    CancelButton,
    CancelText,
    FinalCard,
    ResultCard,
    Separator,
    ScoreView,
    ScoreTitleView,
    ScoreTitleText,
    ScoreValueView,
    ScoreValueText,
    ResultCardView,
    CorrectCard,
    CorrectCardText,
    CorrectCardTitle,
    WrongCard,
    WrongCardText,
    WrongCardTitle,
} from './styles';
import Quiz from './Quiz';
import Background from '~/components/Background';

const questions = [
    {
        id: 1,
        question:
            'if x = 13 e y = 10 then o valor obtido a partir da expressão (x*y) é igual a:',
        answers: [
            {
                id: 1,
                answer: '13',
                isCorrect: false,
            },
            {
                id: 2,
                answer: '10',
                isCorrect: false,
            },
            {
                id: 3,
                answer: '23',
                isCorrect: false,
            },
            {
                id: 4,
                answer: '130',
                isCorrect: true,
            },
        ],
    },
    {
        id: 2,
        question:
            'if x = 13 e y = 10 then o valor obtido a partir da expressão (x*y) é igual a:',
        answers: [
            {
                id: 1,
                answer: '13',
                isCorrect: false,
            },
            {
                id: 2,
                answer: '10',
                isCorrect: false,
            },
            {
                id: 3,
                answer: '23',
                isCorrect: false,
            },
            {
                id: 4,
                answer: '130',
                isCorrect: true,
            },
        ],
    },
    {
        id: 3,
        question:
            'if x = 13 e y = 10 then o valor obtido a partir da expressão (x*y) é igual a:',
        answers: [
            {
                id: 1,
                answer: '13',
                isCorrect: false,
            },
            {
                id: 2,
                answer: '10',
                isCorrect: false,
            },
            {
                id: 3,
                answer: '23',
                isCorrect: false,
            },
            {
                id: 4,
                answer: '130',
                isCorrect: true,
            },
        ],
    },
    {
        id: 4,
        question:
            'if x = 13 e y = 10 then o valor obtido a partir da expressão (x*y) é igual a:',
        answers: [
            {
                id: 1,
                answer: '13',
                isCorrect: false,
            },
            {
                id: 2,
                answer: '10',
                isCorrect: false,
            },
            {
                id: 3,
                answer: '23',
                isCorrect: false,
            },
            {
                id: 4,
                answer: '130',
                isCorrect: true,
            },
        ],
    },
];

export default function Challenge({ navigation }) {
    const _carousel = useRef();
    const [pageIndex, setPageIndex] = useState(1);

    function handleNextPage() {
        setPageIndex(pageIndex + 1);
        _carousel.current.animateToPage(pageIndex);
    }

    return (
        <Background>
            <Container>
                <Card>
                    <Header>
                        <CancelButton
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        >
                            <CancelText>x</CancelText>
                        </CancelButton>
                        {questions.map(x => (
                            <PagesButton
                                current={pageIndex === x.id}
                                past={pageIndex > x.id}
                                key={x.id.toString()}
                            >
                                <PagesText>{x.id}</PagesText>
                            </PagesButton>
                        ))}

                        <PagesButton
                            current={pageIndex === questions.length + 1}
                            past={pageIndex > questions.length + 1}
                            key={(questions.length + 1).toString()}
                        >
                            <FinalCard />
                        </PagesButton>
                    </Header>

                    <Carousel ref={_carousel}>
                        {questions.map(x => {
                            return (
                                <Quiz
                                    key={x.id}
                                    question={x}
                                    navigation={navigation}
                                    callback={handleNextPage}
                                />
                            );
                        })}

                        <ResultCard>
                            <ScoreView>
                                <ScoreTitleView>
                                    <ScoreTitleText>Seu score</ScoreTitleText>
                                </ScoreTitleView>
                                <ScoreValueView>
                                    <ScoreValueText>80%</ScoreValueText>
                                </ScoreValueView>
                            </ScoreView>

                            <Separator />

                            <ResultCardView>
                                <CorrectCard>
                                    <CorrectCardText>3</CorrectCardText>
                                    <CorrectCardTitle>Acertos</CorrectCardTitle>
                                </CorrectCard>
                                <WrongCard>
                                    <WrongCardText>1</WrongCardText>
                                    <WrongCardTitle>Erros</WrongCardTitle>
                                </WrongCard>
                            </ResultCardView>

                            <Separator />

                            <FinishButton
                                onPress={() => {
                                    navigation.navigate('Home');
                                }}
                            >
                                <FinishText>Concluir</FinishText>
                            </FinishButton>
                        </ResultCard>
                    </Carousel>
                </Card>
            </Container>
        </Background>
    );
}
