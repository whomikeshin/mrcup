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

import Stars from 'react-native-stars';

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      sampleCount: params.sampleCount,
      cupCount: params.cupCount,
      blind: false,
      samples: [],
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let sampleCount = parseInt(this.state.sampleCount);
    return (
      <View style={styles.container}>
      <Text>Cups</Text>
      <TextInput
        style={styles.input}
        placeholder={this.state.cupCount}
        onChangeText={(text) => this.setState({cupCount: text})}
        autoCapitalize={"none"}>
      </TextInput>
      <Text>Samples</Text>
      <TextInput
        style={styles.input}
        placeholder={"Sample 1"}
        autoCapitalize={"none"}>
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder={"Sample 2"}
        autoCapitalize={"none"}>
      </TextInput>
      <Text>Blind?</Text>
      <Switch
        onValueChange={(value) => this.setState({blind: value})}
        value={this.state.blind}>
      </Switch>
      <Text>Timer Notification</Text>
      <Button
        onPress={() => navigate('CuppingForm', {
          sampleName1: this.state.samples[0], sampleName2: this.state.samples[1]
        })}
        title={'Start Cupping'}>
      </Button>
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
  input: {
    fontSize: 14,
    width: 275,
    height: 40,
    alignSelf: 'center',
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
