import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AdMobBanner } from 'react-native-admob';


class AboutPage extends Component {
    state = {}
    render() {
        return (<View style={styles.container}>
            <Text style={styles.text}>

                {'\n'}We develop exclusive apps and websites with cutting edge technology.{'\n'}

                {'\n'}We also build wallpapers and animation images.{'\n'}

                {'\n'}We are happy to serve you 😊{'\n'}
            </Text>

            <Text style={styles.text}>
                Contact us on : <Text style={styles.emailText}>the_creed.7@outlook.com</Text>
            </Text>

            <View style={styles.followText}>
                <Text style={styles.text}>
                    Follow us on:
                </Text>

                <AntDesign
                    name="instagram"
                    size={25}
                    color='red'
                    style={styles.icon}
                    onPress={() => Linking.openURL('https://instagram.com/the_creed.7?igshid=1m1c3xbxauk20')}
                />
                <AntDesign
                    name="facebook-square"
                    size={25}
                    color='blue'
                    style={styles.icon}
                    onPress={() => Linking.openURL('https://www.facebook.com/The-CREED-106664711096633/')}
                />
            </View>
            <View style={{marginTop:20,alignItems:'center'}}>
                <AdMobBanner
                    adSize="mediumRectangle"
                    adUnitID="ca-app-pub-2962258148755216/7242538619"
                    didFailToReceiveAdWithError={err => console.log(err)} />

            </View>

        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#18233a',
        opacity: 0.6
    },
    text: {
        fontSize: 19,
        left: 10,
        marginRight: 20,
        color: '#caf1e7',
        opacity: 1
    },
    emailText: {
        color: 'aqua',
    },
    followText: {
        flexDirection: 'row',
        display: 'flex',
        marginTop: 10
    },
    icon: {
        marginLeft: 15
    }
});

export default AboutPage;