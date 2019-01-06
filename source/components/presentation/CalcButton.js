import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

class CalcButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.handleButtonInput.bind(this, this.props.value)}
        style={styles.button}
      >
        <Text style={styles.btnText}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: "rgb(225,225,225)",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 36
  }
});

export default CalcButton; 