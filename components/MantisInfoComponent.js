import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { MANTISES } from "../shared/mantises";

function RenderMantis({ mantis }) {
  if (mantis) {
    return (
      <Card featuredTitle={mantis.name}>
        <Text style={{ margin: 10 }}>{mantis.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class MantisInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mantises: MANTISES,
    };
  }

  static navigationOptions = {
    title: "Mantis Info",
  };

  render() {
    const mantisId = this.props.navigation.getParam("mantisId");
    const mantis = this.state.mantises.filter(
      (mantis) => mantis.id === mantisId
    )[0];
    return <RenderMantis mantis={mantis} />;
  }
}

export default MantisInfo;
