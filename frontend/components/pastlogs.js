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
  FlatList
} from 'react-native';

export default class PastLogs extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Past Logs</Text>
        <Text>Welcome {params.username}!</Text>
        <FlatList>
          
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 80,
    height: 40,
    fontSize: 14,
  },
});

// AppRegistry.registerComponent('PastLogs', () => PastLogs);
