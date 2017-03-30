import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import UserAuth from './app/components/userauth';
import Nav from './app/components/navigator';
import NavIOS from './app/components/navigatorIOS';
import Navi from './app/components/navigation';

export default class mrcup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navi/>
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
