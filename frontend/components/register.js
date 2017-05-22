import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator,
  Text,
  View,
  AppRegistry,
} from 'react-native';

const SESSION_TOKEN = 'session_token';

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      showProgress: false,
      errors: [],
    };
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  // when an async function is called it returns a Promise
  async storeToken(accessToken) {
    // try lets you test a block a code for errors
    try {
      // AsyncStore is undefined
      await AsyncStore.setItem(SESSION_TOKEN, accessToken);
      console.log("Token was stored successfully");
    } catch(error) {
      console.log("Something went wrong");
    }
  }


  async onRegisterPressed() {
    console.log("pressed")
    this.setState({
      showProgress: true
    })

    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    try {
      let response = await fetch('api/users', {
        method: 'post',
        headers: myHeaders,
        body: JSON.stringify({
          user: {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          }
        })
      });

      console.log(response)

      let res = await response.text();

      if (response.status >= 200 && response.status < 300) {
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
        <Text style={styles.header}>
          Register now!
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({email: text}) }
          style={styles.input}
          placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={(text) => this.setState({username: text}) }
          style={styles.input}
          placeholder="Username">
        </TextInput>
        <TextInput
          onChangeText={(text) => this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        <TextInput
          onChangeText={(text) => this.setState({password_confirmation: text}) }
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
      </View>

        // <Errors errors={this.state.errors}/>

        // <ActivityIndicator
        //   animating={this.state.showProgress}
        //   size='large'
        //   style={styles.loader}
        // />
    );
  }
}

// const Errors = (props) => {
//   return (
//     <View>
//       {props.errors.map((error, i) => <Text key={i} style={styles.error}> {error} </Text>)}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    width: 275,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    height: 40,
    backgroundColor: '#4E2A2A',
    width: 275,
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  // error: {
  //   color: 'red',
  //   paddingTop: 10
  // },
  // loader: {
  //   marginTop: 20
  // }
});

// AppRegistry.registerComponent('Register', () => Register);
