import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

class AppHeader extends Component {
    state = {}
    openMenu = () => {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.header}>
                {/* <MaterialIcons name="menu" size={28} onPress={this.openMenu} style={styles.icon} /> */}
                <Octicons
                    style={styles.icon}
                    name="three-bars"
                    size={30} color="white"
                    onPress={this.openMenu}
                />

                <View>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    text: {
        textAlign: "center",
        color: 'skyblue',
        fontSize: 20,
        left:15,
        fontFamily: 'fantasy',
        fontWeight: '700'
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});

export default AppHeader;