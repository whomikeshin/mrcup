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

export default class PastLogs extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Past Logs</Text>
        <Text>Welcome {params.username}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

// AppRegistry.registerComponent('PastLogs', () => PastLogs);
