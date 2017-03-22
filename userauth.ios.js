import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter username1"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('UserAuth', () => UserAuth);
