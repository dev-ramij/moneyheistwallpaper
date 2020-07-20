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
                headerTitle: () => <AppHeader title="CITY WALLPAPER" navigation={navigation} />
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
            backgroundColor: '#0b3f47',
            height: 60
        }
    }
});

export default HomeStack;

