import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Nav extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text style={styles.text}>
            Hello {route.title}!
          </Text>
          </TouchableHighlight>
        }
        style={styles.navigator}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (<Text>Cancel</Text>); },
              RightButton: (route, navigator, index, navState) =>
                { return (<Text>Done</Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text>Awesome Nav Bar</Text>); },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    padding: 100,
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: 16
  }
});

AppRegistry.registerComponent('Nav', () => Nav);
