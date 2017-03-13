import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }
  render() {
    let pic = {
      uri: '../../assets/images/coffee_beans.png'
    };
    
    return (
      <View>
        <Text style={styles.text}>Welcome to Mr. Cup!</Text>
        <Image source={pic} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  }
});

AppRegistry.registerComponent('welcome', () => mrcup);
