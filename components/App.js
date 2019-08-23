import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginTab from "./LoginTab";
import SignupTab from "./SignupTab";

const AppNavigator = createStackNavigator({
  Login: LoginTab,
  Signup: SignupTab
});

const MainNavigator = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
