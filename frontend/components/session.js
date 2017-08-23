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

import Stars from 'react-native-stars';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sampleCount: '1',
      cupCount: '1',
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const date = new Date();
    return (
      <View style={styles.container}>
        <Text>Session</Text>
        <TextInput
          style={styles.input}
          placeholder={date.toDateString() + " " + date.toLocaleTimeString()}
          onChangeText={(text) => this.setState({name: text})}
          autoCapitalize={"none"}
        />
      <Text style={styles.header}>Samples</Text>
        <Stars
          rating={1}
          update={(value)=>{this.setState({sampleCount: value})}}
          spacing={10}
          starSize={40}
          count={5}
          fullStar={require('../../app/assets/images/coffee_bean_full.png')}
          emptyStar={require('../../app/assets/images/coffee_bean_empty.png')}
        />
      <Text style={styles.header}>Cups</Text>
        <Stars
          rating={1}
          update={(value)=>{this.setState({cupCount: value})}}
          spacing={10}
          starSize={40}
          count={5}
          fullStar={require('../../app/assets/images/cup_full.png')}
          emptyStar={require('../../app/assets/images/cup_empty.png')}
        />
      <Button
        onPress={() => navigate('Advanced', {
          sampleCount: this.state.sampleCount, cupCount: this.state.cupCount
        })}
        title={'Advanced'}
      />
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
    marginTop: 15,
    marginBottom: 10,
  },
});

// AppRegistry.registerComponent('Session', () => Session);
