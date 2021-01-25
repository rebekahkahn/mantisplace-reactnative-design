import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { MANTISES } from "../shared/mantises";

function RenderMantis({ mantis }) {
  let price = JSON.stringify(mantis.price);

  if (mantis) {
    return (
      <Card>
        <Card.Content>
          <View style={styles.container}>
            <View style={styles.itemInfo}>
              <Card.Cover
                source={require("./shared/images/mantis_standin.jpg")}
              />
            </View>
            <View style={styles.itemDetails}>
              <Title>{mantis.name}</Title>
              <Paragraph>${price}</Paragraph>
              <View style={styles.itemButtons}>
                <Card.Actions>
                  <Button
                    icon="plus"
                    mode="contained"
                    color="#59916d"
                    onPress={() => console.log("Added")}
                  />
                  <Button mode="text">1</Button>
                  <Button
                    icon="minus"
                    mode="contained"
                    color="#59916d"
                    onPress={() => console.log("Deleted")}
                  />
                </Card.Actions>
              </View>
            </View>
          </View>
          <Title>Prouct Description: </Title>
          <Paragraph>{mantis.description}</Paragraph>
        </Card.Content>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  itemButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  itemInfo: {
    width: "50%",
  },
  itemDetails: {
    alignItems: "flex-start",
    width: "45%",
    marginLeft: 10,
  },
});

export default MantisInfo;
