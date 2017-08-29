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
  Picker
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
      sampleNames: [],
      dry: '0',
      crust: '0',
      slurp: '0',
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let sampleCount = parseInt(this.state.sampleCount);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Cups
        </Text>
        <TextInput
          style={styles.input}
          placeholder={this.state.cupCount}
          onChangeText={(text) => this.setState({cupCount: text})}
          autoCapitalize={"none"}>
        </TextInput>
        <Text style={styles.header}>
          Sample Name
        </Text>
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
        <Text style={styles.header}>
          Blind?
        </Text>
        <Switch
          style={styles.blind}
          onValueChange={(value) => this.setState({blind: value})}
          value={this.state.blind}>
        </Switch>
        <Text style={styles.header}>
          Set Timer
        </Text>
        <Text>
          *Influsion is reference point
        </Text>
        <Text style={styles.header}>
          Dry
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.dry}
          onValueChange={(value) => this.setState({dry: value})}>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
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
  header: {
    marginTop: 10,
    fontSize: 18,
  },
  blind: {
    marginTop: 10,
  },
  picker: {
    width: 80,
    height: 20,
    fontSize: 14,
  },
});
