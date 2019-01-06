import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calc} from './source/components/screens';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Calc/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
