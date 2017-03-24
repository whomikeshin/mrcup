import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class NavIOS extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: { myProp: 'foo' } //access via {this.props.myProp}
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}



AppRegistry.registerComponent('NavIOS', () => NavIOS);
