import { SafeAreaView, StyleSheet, View, Text, } from 'react-native-safe-area-context';
import React, { Component } from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';


export default function DrawerContent(props) {

    <ScrollView>
        <View

        >
            <Text style={{ color: 'white', fontSize: 30 }}>
                Header
      </Text>
        </View>
        <View style={{ flex: 1 }}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
}