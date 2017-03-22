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

const onButtonPress = () => {
  Alert.alert('Button pressed!');
};

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password',
    };
  }

  render() {
    return (
      <View style={styles.containter}>
        <View style={styles.header}>
          <Text style={styles.text}>
            CUPFEE
          </Text>
        </View>
        <View style={styles.body}>
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
            style={styles.button}
            onPress={onButtonPress}
            title="Login"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: '#593C1F',
    width: '100%',
    maxHeight: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    margin: 20,
  },
  body: {
    flex: 2,
  },
  input: {
    fontSize: 14,
    textAlign: 'left',
    backgroundColor: '#f8f8f8',
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('UserAuth', () => UserAuth);
