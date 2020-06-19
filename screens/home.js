import React, { Component } from 'react';
import TabViewExample from './tab';
class HomePage extends Component {
    state = {}

    openImage = (src) => {
        this.props.navigation.navigate('Image')
    }

    render() {
        return (
            <TabViewExample />
        );
    }
}


export default HomePage;