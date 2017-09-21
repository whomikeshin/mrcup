/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  Modal,
  TouchableHighlight,
} from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      modalVisible: false,
    };
  }

  toggleModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal closed.")}}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.time}
            onValueChange={(value) => this.setState({time: value})}>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
          <View style={{marginTop: 20}}>
            <Text>Timer</Text>
            <TouchableHighlight onPress={() => {
                this.toggleModalVisible(!this.state.modalVisible)
              }}>
              <Text>Hide Timer</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight onPress={() => {
            this.toggleModalVisible(true)
          }}>
          <Text>Show Timer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
  picker: {
    width: 80,
    height: 40,
  },
});
