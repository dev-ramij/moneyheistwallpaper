import React from "react";
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AboutStack from './routes/aboutStack';
import HomeStack from './routes/homeStack';


const rootDrawerNavigator = createDrawerNavigator({
    Wallpaper: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Wallpaper'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'About Us'
        }
    },

},
    {
        initialRouteName: 'Wallpaper',
        drawerPosition: 'left',
        contentComponent: (props) => (
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.ibb.co/DwQdqXS/Pics-Art-06-05-02-49-50.jpg' }}
                    style={styles.backgroundImage}>

                    <Text style={styles.sideBarText}>LA CASA DE PAPEL</Text>
                </ImageBackground>

                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </View>
        ),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'

    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sideBarText: {
        fontSize: 25,
        color: 'whitesmoke',
        fontFamily: 'monospace',
        color: 'rgba(66, 173, 245,0.8)',
        fontWeight: 'bold',
        textShadowColor:'aqua'
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default createAppContainer(rootDrawerNavigator);