import React, { Component } from 'react';
import Mantises from './MantisesComponent';
import { MANTISES } from '../shared/mantises';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mantises: MANTISES
        };
    }

    render() {
        return <Mantises mantises={this.state.mantises} />
    }
}

export default Main;