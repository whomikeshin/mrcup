/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
} from 'react-native';

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      sampleCount: params.sampleCount,
      cupCount: params.cupCount,
      blind: false,
    };
  }

  render() {
    return (
      <View>
        <Text>Samples: {this.state.sampleCount}</Text>
        <Text>Cups: {this.state.cupCount}</Text>
        <Text>Blind?</Text>
        <Switch
          onValueChange={(value) => this.setState({blind: value})}
          value={this.state.blind} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});
