import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Mantises from "./MantisesComponent";
import MantisInfo from "./MantisInfoComponent";

const MantisesNavigator = createStackNavigator(
  {
    Mantises: {
      screen: Mantises,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Appbar.Action
            icon="format-align-justify"
            onPress={() => navigation.toggleDrawer()}
          />
        ),

        headerTitle: () => (
          <View>
            <Text style={styles.container}>Mantis Place</Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ backgroundColor: "#59916d", flexDirection: "row" }}>
            <Appbar.Action
              icon="magnify"
              onPress={() => console.log("Pressed magnify")}
              style={styles.icon}
            />
            <Appbar.Action
              icon="account"
              onPress={() => console.log("Pressed account")}
            />
            <Appbar.Action
              icon="cart"
              onPress={() => console.log("Pressed cart")}
            />
          </View>
        ),
      }),
    },

    MantisInfo: { screen: MantisInfo },
  },
  {
    initialRouteName: "Mantises",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#59916d",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#202020",
        fontFamily: "Aladin",
        fontSize: 30,
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Mantises: {
      screen: MantisesNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <IconButton icon="bug" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: "Mantises",
    drawerBackgroundColor: "#59916d",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#59916d",
    fontFamily: "Aladin",
    fontSize: 30,
    color: "#202020",
  },
  icons: {
    color: "white",
  },
});

export default Main;
