import React, { Component } from 'react';
import AllImages from './tabs/all';

const animated = require('../database/image.json');

class HomePage extends Component {
    state = {}

    openImage = (src) => {
        this.props.navigation.navigate('Image')
    }

    render() {
        return (
            <AllImages images={animated} />
        );
    }
}


export default HomePage;