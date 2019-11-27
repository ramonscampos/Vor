import React, { useState } from 'react';

import {
    Container,
    Question,
    AnswerView,
    AnswerText,
    EndButton,
    EndText,
} from './styles';

export default function Quiz({ navigation }) {
    const [answer, setAnswer] = useState(null);

    return (
        <Container>
            <Question>
                Considerando o elemento O (Oxigênio) e uma variável hidroCount
                que armazena a quantidade de moléculas de hidrogênio, qual
                alternativa deveria para que ele se tranformasse em Hidrogênio?
            </Question>

            <AnswerView
                disabled={!!answer}
                onPress={() => {
                    setAnswer(1);
                }}
                wrong={answer === 1}
            >
                <AnswerText wrong={answer === 1}>
                    if(hidroCount == 1) O += hidroCount
                </AnswerText>
            </AnswerView>
            <AnswerView
                disabled={!!answer}
                onPress={() => {
                    setAnswer(2);
                }}
                answered={!!answer}
            >
                <AnswerText answered={!!answer}>
                    if(hidroCount == 2) O += hidroCount
                </AnswerText>
            </AnswerView>
            <AnswerView
                disabled={!!answer}
                onPress={() => {
                    setAnswer(3);
                }}
                wrong={answer === 3}
            >
                <AnswerText wrong={answer === 3}>
                    if(hidroCount == O) O = hidroCount
                </AnswerText>
            </AnswerView>
            <AnswerView
                disabled={!!answer}
                onPress={() => {
                    setAnswer(4);
                }}
                wrong={answer === 4}
            >
                <AnswerText wrong={answer === 4}>
                    {'if(hidroCount < 4) O += hidroCount'}
                </AnswerText>
            </AnswerView>

            {!!answer && (
                <EndButton
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <EndText>Finalizar</EndText>
                </EndButton>
            )}
        </Container>
    );
}
