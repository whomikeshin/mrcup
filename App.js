/*jshint esversion: 6 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import Session from './frontend/components/session';
import UserAuth from './frontend/components/userauth';
import PastLogs from './frontend/components/pastlogs';
import Register from './frontend/components/register';
import Advanced from './frontend/components/advanced';
import CuppingForm from './frontend/components/cupping_form';
import Timer from './frontend/components/timer';

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
            onPress={() => navigate('Session', { name: 'Arabica', userName: '' })}
            title="Quick Start"
            style={styles.button}/>
          <Button
            onPress={() => navigate('PastLogs')}
            title="Past Logs"
            style={styles.button}/>
          <Button
            onPress={() => navigate('Advanced', {
              sampleCount: '1', cupCount: '1'
            })}
            title="Advanced"
            style={styles.button}/>
          <Button
            onPress={() => navigate('SignIn')}
            title="Sign In"
            style={styles.button}/>
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
        <Button
          onPress={() => navigate('SignUp')}
          title="Sign Up"
          style={styles.button}/>
        <Button
          onPress={() => navigate('SignOut')}
          title="Sign Out"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Main: { screen: StartScreen },
  Account: { screen: AccountScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'Home',
  //how to add routes here??
};

const mrcup = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Session: {
    screen: Session,
    path: 'users/:id',
  },
  SignIn: { screen: UserAuth },
  PastLogs: { screen: PastLogs },
  SignUp: { screen: Register },
  Advanced: { screen: Advanced },
  CuppingForm: { screen: CuppingForm },
  Timer: { screen: Timer },
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
    color: 'white'
  },
});

AppRegistry.registerComponent('mrcup', () => mrcup);
