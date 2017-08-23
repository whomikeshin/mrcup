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
    };
  }

  render() {
    let sampleCount = parseInt(this.state.sampleCount);
    return (
      <View>
        <Text>Cups</Text>
        <Stars
          rating={this.state.cupCount}
          update={(value)=>{this.setState({cupCount: value})}}
          spacing={10}
          starSize={40}
          count={5}
          fullStar={require('../../app/assets/images/cup_full.png')}
          emptyStar={require('../../app/assets/images/cup_empty.png')}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder={"Sample 1"}
            autoCapitalize={"none"}
          />
          <TextInput
            style={styles.input}
            placeholder={"Sample 2"}
            autoCapitalize={"none"}
          />
        </View>
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
