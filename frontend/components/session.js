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
  Picker,
  TouchableHighlight,
} from 'react-native';

import Stars from 'react-native-stars';

export default class Session extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    let defaultName = date.toDateString() + " " + date.toLocaleTimeString();
    this.state = {
      name: defaultName,
      sampleCount: 0,
      sampleNames: [],
      cupCount: 1,
    };
  }

  submitEdit(value) {
    let addOne = this.state.sampleCount += 1,
        addToSampleNames = this.state.sampleNames;
    addToSampleNames.push(value);

    if (addOne <= 30) {
      this.setState({sampleCount: addOne, sampleNames: addToSampleNames});
    }
    //9/18: add Alert if over 30
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.header}>Session Name</Text>
          <TextInput
            style={styles.input}
            placeholder={this.state.name}
            onChangeText={(text) => this.setState({name: text})}
            autoCapitalize={"none"}
            />
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
          <View style={styles.div}>
            <Text style={styles.header}>Samples</Text>
            <Text style={styles.header}>{this.state.sampleCount}</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter Sample Name"}
              autoCapitalize={"none"}
              onSubmitEditing={(value) => this.submitEdit(value)}>
            </TextInput>
          </View>
        </View>
        <View style={styles.div}>
          <Button
            style={styles.button}
            onPress={() => navigate('CuppingForm', {
              sampleCount: this.state.sampleCount,
              sampleNames: this.state.sampleNames,
              cupCount: this.state.cupCount
            })}
            title={'Start Cupping'}>
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigate('Advanced', {
              name: this.state.name,
              sampleCount: this.state.sampleCount.toString(),
              sampleNames: this.state.sampleNames,
              cupCount: this.state.cupCount.toString(),
            })}
            title={'Advanced'}>
          </Button>
        </View>
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
  div: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    width: 80,
    height: 40,
    fontSize: 14,
  },
  header: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 18,
  },
  image: {
    width: 375,
    height: 200,
  },
});

// AppRegistry.registerComponent('Session', () => Session);
