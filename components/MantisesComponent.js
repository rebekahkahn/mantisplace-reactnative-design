import React from 'react';
import Header from './HeaderComponent';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

function Mantises(props) {
    const renderMantisItem = ( {item} ) => {
        return (
            <View style={styles.card}>
            <Card>
                <Card.Content>
                    <Title style={styles.title}>{item.name}</Title>
                </Card.Content>
                <Card.Cover style={styles.image} source={require('./shared/images/mantis_standin.jpg')} />
            </Card>
            </View>
        );
    };

    return (
        <ScrollView>
            <Header />
            <FlatList 
                numColumns={2}
                data={props.mantises}
                renderItem={renderMantisItem}
                keyExtractor= {item=> item.id.toString()}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
    },
    title: {
        height: 70,
        borderColor: 'red'
    },
    image: {
        margin: 10
    }

})

export default Mantises;