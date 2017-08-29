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
  ScrollView,
  Picker,
} from 'react-native';

export default class CuppingForm extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      sampleCount: this.props.sampleCount
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>
          Cupping Form
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
