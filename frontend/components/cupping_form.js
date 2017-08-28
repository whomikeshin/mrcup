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
        <Picker
          style={styles.picker}
          selectedValue={this.state.sampleCount}
          onValueChange={(value) => this.setState({sampleCount: value})}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
        </Picker>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
