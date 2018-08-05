import { createStackNavigator } from 'react-navigation';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';


const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    Themes: {
        screen: Themes,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
}, {
        mode: 'model',

    });

const CurrencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
});

const SplashStack = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: () => null,
        },
    },
});

const RootStack = createStackNavigator({
    Splash: {
        screen: SplashStack,
        navigationOptions: {
            header: () => null,
        },
    },
    Home: {
        screen: HomeStack,
        navigationOptions: {
            header: () => null,
        },
    },
    CurrencyList: {
        screen: CurrencyListStack
    },
},
    {
        mode: 'modal',
        headerMode: 'none'
        // cardStyle : {paddingTop : StatusBar.currentHeight}
    },
);

export default RootStack;
