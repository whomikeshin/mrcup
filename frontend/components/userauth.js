import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';

// import ApiUtils from '../util/ApiUtils';
// import ApiUtil from '../util/api_util';

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onPress() {
    var data = new FormData();
    data.append("json", JSON.stringify(this.state));

    fetch('/api/session', {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: data
    }).then(function(response) {
      // console.log(response);
      return response.json();
    }).catch(function(response) {
      debugger
      console.error(response);
    });
  }

  render() {
    return (
      <View style={styles.containter}>
        <Image
          source={require('../../app/assets/images/header.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
        <Button
          style={styles.button}
          onPress={this.onPress.bind(this)}
          title="Log In"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 375,
    height: 150,
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    width: 275,
    alignSelf: 'center',
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  }
});

// AppRegistry.registerComponent('UserAuth', () => UserAuth);
