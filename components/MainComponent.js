import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Mantises from './MantisesComponent';
import MantisInfo from './MantisInfoComponent';
import { Appbar } from 'react-native-paper';

const MantisesNavigator = createStackNavigator (
    {
        Mantises: { screen: Mantises },
        MantisInfo: { screen: MantisInfo }
    },
    {
        initialRouteName: 'Mantises',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#59916d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerTitle: () => (
                <View>
                    <Text
                        style={styles.container}>Mantis Place
                    </Text>
                </View>
            ),
            headerLeft: () => (
                <View>
                    <Appbar.Action icon="format-align-justify"/>
                </View>
            ),
            headerRight: () => (
                <View style={{backgroundColor: '#59916d', flexDirection: 'row'}}>
                    <Appbar.Action icon="magnify" style={styles.icon}/>
                    <Appbar.Action icon="account" />
                    <Appbar.Action icon="cart"  />
                </View>
            )
        }
    }
);

const AppNavigator = createAppContainer(MantisesNavigator);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#59916d',
      fontFamily: 'Aladin',
      fontSize: 30,
      color: '#202020',
    },
    icons: {
        color:'white',
    }
});

export default Main;