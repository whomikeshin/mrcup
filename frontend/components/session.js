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

export default class Session extends Component {
  // static navigationOptions = {
  //   title: ({ state }) => {
  //     if (state.params.mode === 'info') {
  //       return 'Advanced';
  //     }
  //     return 'Cupping Session';
  //   },
  //   header: ({ state, setParams }) => {
  //     let right = (
  //       <Button
  //         title='Advanced'
  //         onPress={() => setParams({ mode: 'info' })}
  //       />
  //     );
  //     if (state.params.mode === 'info') {
  //       right = (
  //         <Button
  //           title="Done"
  //           onPress={() => setParams({ mode: 'none' })}
  //         />
  //       );
  //     }
  //     return { right };
  //   },
  // };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Welcome {params.username}</Text>
        <Text>Sample 1: {params.sessions[0].name}</Text>
        <Text>Sample 2: {params.sessions[1].name}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});

// AppRegistry.registerComponent('Session', () => Session);
