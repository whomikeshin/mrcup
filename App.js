import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import UserAuth from './app/components/userauth';

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return `${state.params.user}'s Contact Info`;
      }
      return `Chat with ${state.params.user}`;
    },
    header: ({ state, setParams }) => {
      let right = (
        <Button
          title={`${state.params.user}'s info`}
          onPress={() => setParams({ mode: 'info' })}
        />
      );
      if (state.params.mode === 'info') {
        right = (
          <Button
            title="Done"
            onPress={() => setParams({ mode: 'none' })}
          />
        );
      }
      return { right };
    },
  };
  
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of recent chats</Text>
          <Button
            onPress={() => navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
          />
      </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>List of all contacts</Text>
          <Button
            onPress={() => navigate('Login')}
            title="Login"
          />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

// case sensitive must be mrcup
// react-native init mrcup
const mrcup = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
  Login: { screen: UserAuth },
});

AppRegistry.registerComponent('mrcup', () => mrcup);
