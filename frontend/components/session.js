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
  Picker
} from 'react-native';

import Stars from 'react-native-stars';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sampleCount: '1',
      cupCount: '1',
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const date = new Date();
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <Text>Session</Text>
          <TextInput
            style={styles.input}
            placeholder={date.toDateString() + " " + date.toLocaleTimeString()}
            onChangeText={(text) => this.setState({name: text})}
            autoCapitalize={"none"}
            />
        </View>
        <View style={styles.div}>
          <Text style={styles.header}>Cups</Text>
          <Stars
            rating={1}
            update={(value) => {this.setState({cupCount: value})}}
            spacing={10}
            starSize={40}
            count={5}
            fullStar={require('../../app/assets/images/cup_full.png')}
            emptyStar={require('../../app/assets/images/cup_empty.png')}>
          </Stars>
        </View>
        <View style={styles.div}>
          <Text style={styles.header}>Samples</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sampleCount}
            onValueChange={(value) => this.setState({sampleCount: value})}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
          </Picker>
        </View>
      <Button
        onPress={() => navigate('Advanced', {
          sampleCount: this.state.sampleCount, cupCount: this.state.cupCount
        })}
        title={'Advanced'}>
      </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  div: {
    flex: 2,
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    width: 275,
    height: 40,
    alignSelf: 'center',
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    width: 40,
    height: 40,
    fontSize: 14,
  },
  header: {
    marginTop: 15,
    marginBottom: 10,
  },
});

// AppRegistry.registerComponent('Session', () => Session);
