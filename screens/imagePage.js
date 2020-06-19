import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

class ImagePage extends Component {
    state = {
        isVisible: false
    }
    openMenu = () => {
        // this.props.navigation.openDrawer();
    }

    render() {
        return (
            <Modal visible={this.props.isVisible}
                animationType={"fade"} transparent={true}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                {/*All views of Modal*/}
                {/*Animation can be slide, slide, none*/}
                <View style={styles.modal}>

                    <View style={styles.header}>
                        <MaterialIcons name="arrow-back" size={28} onPress={this.openMenu} style={styles.icon} />
                        <View>
                            <Text style={styles.text}>{this.props.title}</Text>
                        </View>
                    </View>
                    
                </View>
                
            </Modal >);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#cca4b0',
        borderRadius: 10,
        flex: 0.5,
        margin: 4,
        height: 200
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
        opacity: 1
    },
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

export default ImagePage;