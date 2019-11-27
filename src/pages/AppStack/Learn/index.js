import React, { useState, useRef } from 'react';

import Background from '~/components/Background';
import {
    Container,
    Carousel,
    Card,
    Header,
    PagesButton,
    PagesText,
    NextButton,
    NextText,
    DescriptionCard,
    DescriptionText,
    CancelButton,
    CancelText,
} from './styles';
import Quiz from '~/components/Quiz';

const content = [
    {
        id: 1,
        description:
            'Uma estrutura de decisão examina uma ou mais condições e decide quais instruções serão executadas dependendo se a condição foi ou não foi. O comando if é uma estrutura de decisão muito utilizada.',
    },
    {
        id: 2,
        description:
            'Em pseudocódigo teríamos algo assim: \n\n Se: \n (condição) \nEntão: \nInício Instruções; \n Fim;',
    },
    {
        id: 3,
        description:
            'A condição na linguagem C é definida como uma expressão que pode ser verdadeira ou falsa. À este tipo de expressão dá-se o nome de expressão lógica. Por exemplo,  (3 > 2) é uma expressão lógica que possui valor verdadeiro. Por outro lado, (4 < 1) é uma expressão lógica que possui valor falso.',
    },
];

export default function Learn({ navigation }) {
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
                        {content.map(x => (
                            <PagesButton
                                current={pageIndex === x.id}
                                past={pageIndex > x.id}
                                key={x.id.toString()}
                            >
                                <PagesText>{x.id}</PagesText>
                            </PagesButton>
                        ))}
                        <PagesButton
                            current={pageIndex === content.length + 1}
                            past={pageIndex > content.length + 1}
                            key={(content.length + 1).toString()}
                        >
                            <PagesText>{content.length + 1}</PagesText>
                        </PagesButton>
                    </Header>

                    <Carousel ref={_carousel}>
                        {content.map(x => {
                            return (
                                <DescriptionCard key={x.id}>
                                    <DescriptionText>
                                        {x.description}
                                    </DescriptionText>
                                    <NextButton onPress={handleNextPage}>
                                        <NextText>Prosseguir</NextText>
                                    </NextButton>
                                </DescriptionCard>
                            );
                        })}

                        <Quiz navigation={navigation} />
                    </Carousel>
                </Card>
            </Container>
        </Background>
    );
}
