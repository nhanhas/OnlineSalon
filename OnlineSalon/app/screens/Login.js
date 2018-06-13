import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


/**
 * Stage #3 of Authentication
 * Username & Password
 *       Or
 * Create Account
 */
export default class Login extends Component {
  /**
   * Declare All Component 
   * Properties
   */
  static propTypes = {
    username : PropTypes.string,
    password : PropTypes.string
  }
  
  //#A - Login function 
  userLogin = () => {
    this.props.navigation.navigate('Options');
  };
  
  //# Render #//
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      
        <Button title="Options"
                onPress = {() => {this.userLogin()}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


