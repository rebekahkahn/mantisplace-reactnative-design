import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

function RenderMantis( {mantis} ){
    if (mantis) {
        return (
            <Card
                featuredTitle={mantis.name}
            >
                <Text style={{margin: 10}}>
                    THIS IS BOGUS
                </Text>
            </Card>
        );
    }
    return <View />;
}

function MantisInfo(props) {
    return <RenderMantis mantis={props.mantis} />;
}

export default MantisInfo;