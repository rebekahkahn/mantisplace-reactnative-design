import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { MANTISES } from "../shared/mantises";

function RenderMantis({ mantis }) {
  if (mantis) {
    return (
      <ScrollView>
        <Card>
          <Card.Content>
            <View style={styles.container}>
              <View style={styles.itemImage}>
                <Card.Cover
                  source={require("./shared/images/mantis_standin.jpg")}
                />
              </View>
              <View style={styles.itemDetails}>
                <Title>{mantis.name}</Title>
                <Button
                  icon="camera"
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                >
                  Press me
                </Button>
              </View>
            </View>
            <Paragraph style={{ margin: 10 }}>{mantis.description}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  itemImage: {
    width: "50%",
  },
  itemDetails: {
    width: "50$",
  },
});

export default MantisInfo;
