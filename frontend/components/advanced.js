/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
  Picker
} from 'react-native';

import Stars from 'react-native-stars';

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      name: params.name,
      sampleCount: params.sampleCount,
      sampleNames: params.sampleNames,
      cupCount: params.cupCount,
      blind: false,
      dry: '0',
      crust: '0',
      slurp: '0',
    };
  }

  // sampleList() {
  //   const sampleNames = this.state.sampleNames;
  //   return sampleNames.map(function(name){
  //     return(
  //       <View>
  //         <Text>{name}</Text>
  //       </View>
  //     );
  //   });
  // }

  render() {
    const { navigate } = this.props.navigation;
    let sampleCount = parseInt(this.state.sampleCount);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.name}
        </Text>
        <Text style={styles.header}>
          Cups
        </Text>
        <TextInput
          style={styles.input}
          placeholder={this.state.cupCount}
          onChangeText={(text) => this.setState({cupCount: text})}
          autoCapitalize={"none"}>
        </TextInput>
        <Text style={styles.header}>
          Blind?
        </Text>
        <Switch
          style={styles.blind}
          onValueChange={(value) => this.setState({blind: value})}
          value={this.state.blind}>
        </Switch>
        <Text style={styles.header}>
          Set Timer
        </Text>
        <Text>
          *Influsion is reference point
        </Text>
        <View style={styles.container}>
          <Text style={styles.header}>
            Dry
          </Text>
          <Button
            onPress={() => navigate('Timer', { })}
            title={'Set'}>
          </Button>
          <Text style={styles.header}>
            Crust
          </Text>
          <Button
            onPress={() => navigate('Timer', { })}
            title={'Set'}>
          </Button>
          <Text style={styles.header}>
            Slurp
          </Text>
          <Button
            onPress={() => navigate('Timer', { })}
            title={'Set'}>
          </Button>
        </View>
        <Button
          onPress={() => navigate('CuppingForm', {
            //props
          })}
          title={'Start Cupping'}>
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
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
  header: {
    marginTop: 10,
    fontSize: 18,
  },
  blind: {
    marginTop: 10,
  },
  picker: {
    width: 80,
    height: 20,
  },
});
