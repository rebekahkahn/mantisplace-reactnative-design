import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { MANTISES } from '../shared/mantises';

class Mantises extends Component {
    constructor(props){
        super(props);
        this.state = {
            mantises: MANTISES,
        };
    }

    static navigationOptions = {
        title: 'Mantises'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderMantisItem = ({item}) => {
            return (
                <View style={styles.card}>
                <Card onPress={() => navigate('MantisInfo', { mantisId: item.id })}>
                    <Card.Content>
                        <Title style={styles.title}>
                            {item.name}
                        </Title>
                    </Card.Content>
                    <Card.Cover style={styles.image} source={require('./shared/images/mantis_standin.jpg')} />
                </Card>
                </View>
            );

        };

       return (
            <ScrollView>
                <FlatList 
                    numColumns={2}
                    data={this.state.mantises}
                    renderItem={renderMantisItem}
                    keyExtractor= {item => item.id.toString()}
                />
            </ScrollView>
       );
    }
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3
    },
    title: {
        height: 90,
    },
    image: {
        margin: 10
    }

})

export default Mantises;