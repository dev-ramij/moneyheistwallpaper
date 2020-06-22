import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import AllImages from './tabs/all';

const animated = require('../database/animated.json');
const quotes = require('../database/quotes.json');
const others = require('../database/others.json');
var allimage = [...others,...animated, ...quotes, ]
const FirstRoute = () => (
    <AllImages images={allimage} />
);

const SecondRoute = () => (
    <AllImages images={animated} />
);

const ThirdRoute = () => (
    <AllImages images={quotes} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample({ openImage }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All' },
        { key: 'second', title: 'Animated' },
        { key: 'third', title: 'Quotes' }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    return (
        <TabView
            style={styles.tab}
            renderTabBar={props => <TabBar style={styles.tabbar} {...props} />}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tab:{
        backgroundColor:'#67424e'
    },
    tabbar:{
        backgroundColor:'#460016'
    }
});
