import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ImageHeader extends Component {
    state = {}
    openMenu = () => {
        // this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.header}>
                {/* <MaterialIcons name="arrow-back" size={28} onPress={this.openMenu} style={styles.icon} /> */}
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
        color: 'white',
        fontSize: 20,
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});

export default ImageHeader;