import { createStackNavigator, Header } from 'react-navigation-stack';
import HomePage from '../screens/home';
import ImagePage from '../screens/imagePage';
import AppHeader from '../header';
import React from 'react';
import ImageHeader from '../imageHeader';

const screens = {
    Home: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <AppHeader title="MONEY HEIST WALLPAPER" navigation={navigation} />
            }
        }
    },
    Image: {
        screen: ImagePage,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ImageHeader title="Money Heist Wallpaper" navigation={navigation}  />
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#26364e',
            height: 60
        }
    }
});

export default HomeStack;

