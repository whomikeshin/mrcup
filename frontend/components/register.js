/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator,
  Text,
  View,
  AppRegistry,
  Alert,
  Button
} from 'react-native';

const SESSION_TOKEN = 'session_token';

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmation: '',
    };
  }

  register() {
    const { navigate } = this.props.navigation;
    if (this.state.password !== this.state.confirmation) {
      Alert.alert("Password confrimation does not match Password");
    } else {
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then((response) => response.json())
        .then((data) => navigate('Session', { username: data.username }))
        .catch((error) => { console.error(error);
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Register now!
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({email: text}) }
          style={styles.input}
          placeholder="Email"
          autoCapitalize={"none"}
        />
        <TextInput
          onChangeText={(text) => this.setState({username: text}) }
          style={styles.input}
          placeholder="Username"
          autoCapitalize={"none"}
        />
        <TextInput
          onChangeText={(text) => this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
        <TextInput
          onChangeText={(text) => this.setState({confirmation: text}) }
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
        <Button
          onPress={this.register.bind(this)}
          title={'Sign Up'}
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
  button: {
    height: 40,
    backgroundColor: '#4E2A2A',
    width: 275,
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  }
});
