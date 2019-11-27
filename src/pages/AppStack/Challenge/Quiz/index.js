import React, { useState, useEffect } from 'react';

import { Container, Question, AnswerView, AnswerText } from './styles';

export default function Quiz({ question, callback }) {
    const [answer, setAnswer] = useState(null);
    const idCorrect = question.answers.filter(y => {
        return y.isCorrect;
    })[0].id;

    useEffect(() => {
        if (answer) {
            setTimeout(() => {
                callback();
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answer]);

    return (
        <Container>
            <Question>{question.question}</Question>

            {question.answers.map(x => (
                <AnswerView
                    disabled={!!answer}
                    onPress={() => {
                        setAnswer(x.id);
                    }}
                    wrong={answer && answer !== idCorrect && x.id === answer}
                    answered={answer && x.id === idCorrect}
                >
                    <AnswerText
                        wrong={
                            answer && answer !== idCorrect && x.id === answer
                        }
                        answered={answer && x.id === idCorrect}
                    >
                        {x.answer}
                    </AnswerText>
                </AnswerView>
            ))}
        </Container>
    );
}
