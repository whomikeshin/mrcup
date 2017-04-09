import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
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
      <View style={styles.container}>
        <Image
          source={require('./app/assets/images/header.png')}
          style={styles.image}
        />
      <Text style={styles.header}>Welcome!</Text>
        <Text style={styles.text}>Big solutions for small roasters</Text>
        <View style={styles.buttons}>
          <Button
            onPress={() => navigate('Login')}
            title="Sign In"
            style={styles.button}
            />
          <Button
            onPress={() => navigate('Session', { name: 'Arabica' })}
            title="Start Cupping"
            style={styles.button}
            />
          <Button
            onPress={() => navigate('PastLogs')}
            title="Past Logs"
            style={styles.button}
            />
        </View>
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
  title: 'Home',
};

const mrcup = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Session: { screen: Session },
  Login: { screen: UserAuth },
  PastLogs: { screen: PastLogs },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center', // aligns center on main axis
    alignItems: 'center',
    // backgroundColor: '#4E2A2A'
  },
  image: {
    width: 375,
    height: 200,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    marginTop: 5,
  },
  buttons: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    marginTop: 10,
  },
});

AppRegistry.registerComponent('mrcup', () => mrcup);
