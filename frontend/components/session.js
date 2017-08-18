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
} from 'react-native';

import Stars from 'react-native-stars';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      samples: '1',
      cups: '1',
    };
  }

  // static navigationOptions = {
  //   title: ({ state }) => {
  //     if (state.params.mode === 'info') {
  //       return 'Advanced';
  //     }
  //     return 'Cupping Session';
  //   },
  //   header: ({ state, setParams }) => {
  //     let right = (
  //       <Button
  //         title='Advanced'
  //         onPress={() => setParams({ mode: 'info' })}
  //       />
  //     );
  //     if (state.params.mode === 'info') {
  //       right = (
  //         <Button
  //           title="Done"
  //           onPress={() => setParams({ mode: 'none' })}
  //         />
  //       );
  //     }
  //     return { right };
  //   },
  // };

  render() {
    const { params } = this.props.navigation.state;
    const date = new Date();
    return (
      <View style={styles.container}>
        <Text>Session</Text>
        <TextInput
          style={styles.input}
          placeholder={date.toDateString() + " " + date.toLocaleTimeString()}
          onChangeText={(text) => this.setState({name: text})}
          autoCapitalize={"none"}
        />
      <Text>Samples</Text>
      <Stars
        rating={1}
        update={(val)=>{this.setState({samples: val})}}
        spacing={10}
        starSize={40}
        count={5}
        fullStar={require('../../app/assets/images/coffee_bean_full.png')}
        emptyStar={require('../../app/assets/images/coffee_bean_empty.png')}
      />
      <Text>Cups</Text>
        <Stars
          rating={1}
          update={(val)=>{this.setState({cups: val})}}
          spacing={10}
          starSize={40}
          count={5}
          fullStar={require('../../app/assets/images/cup_full.png')}
          emptyStar={require('../../app/assets/images/cup_empty.png')}
        />
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
});

// AppRegistry.registerComponent('Session', () => Session);
