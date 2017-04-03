import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import UserAuth from './app/components/userauth';

class SessionScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return 'Advanced';
      }
      return `${state.params.name}`;
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

class StartScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Start Cupping</Text>
          <Button
            onPress={() => navigate('Session', { name: 'Arabica' })}
            title="Session"
          />
      </View>
    );
  }
}

class AccountScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Account Info</Text>
          <Button
            onPress={() => navigate('Login')}
            title="Login"
          />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Start: { screen: StartScreen },
  Account: { screen: AccountScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'CUFFEE',
};

const mrcup = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Session: { screen: SessionScreen },
  Login: { screen: UserAuth },
});

AppRegistry.registerComponent('mrcup', () => mrcup);
