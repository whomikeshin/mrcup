import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View,
  AppRegistry,
} from 'react-native';

const ACCESS_TOKEN = 'access_token'; //session_town

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      errors: [],
      showProgress: false
    };
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  async storeToken(accessToken) {
    try {
      await AsyncStore.setItem(ACCESS_TOKEN, accessToken);
      console.log("Token was stored successfully");
    } catch(error) {
      console.log("Something went wrong");
    }
  }
  async onRegisterPressed() {
    this.setState({
      showProgress: true
    })
    try {
      let response = await fetch('api/users', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          }
        })
      });
      let res = await response.text();
      if (repsonse.status >= 200 && response.status < 300) {
        let accessToken = res;
        console.log(accessToken);
        this.storeToken(accessToken);
        this.redirect('Home');
      } else {
        let error = res;
        throw error;
      }
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      let errorsArray = [];
      for (var key in formErrors) {
        if (formErrors[key].length > 1) {
          formErrors[key].map(error => errorsArray.push(`${key} ${error}`));
        } else {
          errorsArray.push(`${key} ${formErrors[key]}`);
        }
      }
      this.setState({errors: errorsArray})
      this.setState({showProgress: false});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Register now!
        </Text>
        <TextInput
          onChangeText={(email) => this.setState({email: text}) }
          style={styles.input}
          placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={(username) => this.setState({username: text}) }
          style={styles.input}
          placeholder="Username">
        </TextInput>
        <TextInput
          onChangeText={(password) => this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        <TextInput
          onChangeText={(password_confirmation) => this.setState({password_confirmation: text}) }
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}>
        </TextInput>
        <TouchableHighlight
          onPress={this.onRegisterPressed.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
          Register
        </Text>
        </TouchableHighlight>

        <Errors errors={this.state.errors}/>

        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size='large'
          style={styles.loader}
        />
      </View>
    );
  }
}

const Errors = (props) => {
  return (
    <View>
      {props.errors.map((error, i) =>
        <Text key={i} style={styles.error}> {error} </Text>)}
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

AppRegistry.registerComponent('Register', () => Register);
