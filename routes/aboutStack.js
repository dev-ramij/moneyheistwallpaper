import { createStackNavigator } from 'react-navigation-stack';
import AboutPage from '../screens/about';
import AppHeader from '../header';
import React from 'react';

const screens = {
    Home: {
        screen: AboutPage,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <AppHeader title="ABOUT US" navigation={navigation} />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#26364e',
            height: 60
        }
    }
});

export default AboutStack;

