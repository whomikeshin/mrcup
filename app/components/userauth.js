import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class userauth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  onChangeText(value){
    this.setState({
      username: value
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          Welcome to Mr. Cup!
        </Text>
        <TextInput
          placeholder="Enter Username"
          value={this.state.username}
          onChangeText={(value) => this.onChangeText(value)}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  }
});

AppRegistry.registerComponent('userauth', () => mrcup);
