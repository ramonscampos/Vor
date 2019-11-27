import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import CreateNavigator from './routes';

// import { Container } from './styles';

export default function Wrapper() {
    const navigatorRef = useRef();
    const isLogged = useSelector(state => state.auth.isLogged);
    const Routes = CreateNavigator(isLogged);

    return (
        <>
            <StatusBar barStyle="light-content" />
            <Routes ref={navigatorRef} />
        </>
    );
}
