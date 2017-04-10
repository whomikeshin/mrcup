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

const url = 'api/users/7/cupping_sessions/1/samples';

export default class Session extends Component {
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return 'Advanced';
      }
      return 'Cupping Session';
    },
    header: ({ state, setParams }) => {
      let right = (
        <Button
          title='Advanced'
          onPress={() => setParams({ mode: 'info' })}
        />
      );
      if (state.params.mode === 'info') {
        right = (
          <Button
            title="Done"
            onPress={() => setParams({ mode: 'none' })}
          />
        );
      }
      return { right };
    },
  };

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params.name} cupping session</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});

// AppRegistry.registerComponent('Session', () => Session);
