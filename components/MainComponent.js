import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

function Main() {
    const _drawerOpen = () => console.log('Side drawer opens');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Open cart');
    const _handleAccount = () => console.log('Open account page');
    
        return (
        <View>
            <Appbar.Header style={styles.container}> 
                <Appbar.Action icon="format-align-justify" onPress={_drawerOpen}/>
                <Appbar.Content title="Mantis Place" titleStyle={styles.container}/>
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="account" onPress={_handleAccount} />
                <Appbar.Action icon="cart" onPress={_handleMore} />
            </Appbar.Header>
            <Text style={styles.body}>Hello</Text>
            
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#59916d',
      fontFamily: 'Aladin',
      fontSize: 30,
    },
    body: {
        fontFamily: 'Raleway'
    }

});

export default Main;

//NOTES:
//-will replace with hamburger icon later