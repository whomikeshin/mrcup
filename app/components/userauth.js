import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Username",
      password: "Password",
    };
  }

  onPressLogin() {
    console.warn("pressed");
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          CUPFEE
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.setState(value)}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.setState(value)}
          value={this.state.password}
        />
        <Button
          onPress={this.onPressLogin()}
          title="Login"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    color: '#593C1F',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 20
  },
  input: {
    fontSize: 14,
    textAlign: 'left',
    backgroundColor: '#f8f8f8',
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('userauth', () => mrcup);
