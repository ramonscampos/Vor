import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import '~/config/ReactotronConfig';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Wrapper from './Wrapper';

YellowBox.ignoreWarnings(['Warning:', 'componentWillReceiveProps']);

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Wrapper />
        </PersistGate>
    </Provider>
);

export default App;
