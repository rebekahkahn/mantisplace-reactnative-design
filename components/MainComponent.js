import React, { Component } from 'react';
import { View } from 'react-native';
import Mantises from './MantisesComponent';
import MantisInfo from './MantisInfoComponent';
import { MANTISES } from '../shared/mantises';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mantises: MANTISES,
            selectedMantis: null
        };
    }

    onMantisSelect(mantisId) {
        this.setState({selectedMantis: mantisId})
    }

    render() {
        return (
            <View>
                <Mantises 
                    mantises={this.state.mantises}
                    onSelection={mantisId => this.onMantisSelect(mantisId)} 
                />
                <MantisInfo
                    mantis={this.state.mantises.filter(
                        mantis => mantis.id === this.state.selectedMantis)[0]}
                />
            </View>
        )
    }
}

export default Main;