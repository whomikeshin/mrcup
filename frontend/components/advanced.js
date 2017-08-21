/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default class Advanced extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Samples: {params.sampleCount}</Text>
        <Text>Cups: {params.cupCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
