import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Userauth from './app/components/userauth';
import Nav from './app/components/navigator';

export default class mrcup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('mrcup', () => mrcup);
