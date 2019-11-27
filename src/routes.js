import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/AuthStack/Login';
import Register from '~/pages/AuthStack/Register';
import Intro from '~/pages/AuthStack/Intro';
import Theme from '~/pages/AuthStack/ThemeSelector';
import Profile from '~/pages/AppStack/Profile';
import Learn from '~/pages/AppStack/Learn';
import Challenge from '~/pages/AppStack/Challenge';
import SideMenu from '~/components/SideMenu';

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Profile,
        },
        LoggedTheme: {
            screen: Theme,
        },
        Learn,
        Challenge,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

AppStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
};

const drawer = createAppContainer(
    createDrawerNavigator(
        {
            screen: AppStack,
        },
        {
            drawerPosition: 'right',
            contentComponent: SideMenu,
            overlayColor: '#00000070',
        }
    )
);

const AuthStack = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        Intro: { screen: Intro },
        Theme: { screen: Theme },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        transparentCard: true,
        transitionConfig: () => ({
            containerStyleLight: {},
            containerStyleDark: {},
        }),
    }
);

const CreateNavigator = (isLogged = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                AuthStack,
                App: { screen: drawer },
            },
            {
                initialRouteName: isLogged ? 'App' : 'AuthStack',
                headerMode: 'none',
            }
        )
    );

export default CreateNavigator;
