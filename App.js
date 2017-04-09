import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  SytleSheet,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import Session from './app/components/session';
import UserAuth from './app/components/userauth';
import PastLogs from './app/components/pastlogs';

class StartScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome!</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Log In"
          />
        <Button
          onPress={() => navigate('Session', { name: 'Arabica' })}
          title="Start Cupping"
        />
        <Button
          onPress={() => navigate('PastLogs')}
          title="Past Logs"
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
  Session: { screen: Session },
  Login: { screen: UserAuth },
  PastLogs: { screen: PastLogs },
});

AppRegistry.registerComponent('mrcup', () => mrcup);
