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
  ScrollView,
  Slider,
  SectionList,
  ListItem,
  FlatList
} from 'react-native';

export default class CuppingForm extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      sampleCount: this.props.sampleCount,
      fragrance: 6,
      dry: 0,
      break: 0,
      data: [{'fragrance': 6}, {'dry': 0}, {'break': 0}]
    };
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <SectionList
        renderItem={({item}) => <ListItem title={item.title} />}
        renderSectionHeader={({section}) => <h1 title={section.title} />}
        sections={[ // homogenous rendering between sections
          {data: [6], title: 'fragrance'},
          {data: [0], title: 'dry'},
          {data: [0], title: 'break'},
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 18,
    alignSelf: 'center'
  },
  div: {
    flex: 1,
    alignItems: 'center'
  },
  slider: {
    width: 300,
  }
});

// <ScrollView>
//   <Text style={styles.header}>
//     Sample Name
//   </Text>
//   <View style={styles.div}>
//     <Text>Fragrance/Aroma</Text>
//     <Text>{this.state.fragrance}</Text>
//     <Slider
//       style={styles.slider}
//       maximumValue={10}
//       minimumValue={6}
//       step={.25}
//       onValueChange={(value) => this.setState({fragrance: value})}>
//     </Slider>
//     <Text>Dry</Text>
//     <Text>{this.state.dry}</Text>
//     <Slider
//       style={styles.slider}
//       maximumValue={5}
//       minimumValue={0}
//       step={.25}
//       onValueChange={(value) => this.setState({dry: value})}>
//     </Slider>
//     <Text>Break</Text>
//     <Text>{this.state.break}</Text>
//     <Slider
//       style={styles.slider}
//       maximumValue={5}
//       minimumValue={0}
//       step={.25}
//       onValueChange={(value) => this.setState({break: value})}>
//     </Slider>
//   </View>
//   <View style={styles.div}>
//
//   </View>
// </ScrollView>
