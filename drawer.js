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
                <ImageBackground source={{ uri: 'https://i.ibb.co/tm6dMb6/20200714-104822.png' }}
                    style={styles.backgroundImage}>

                    {/* <Text style={styles.sideBarText}></Text> */}
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
        height: 150,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default createAppContainer(rootDrawerNavigator);