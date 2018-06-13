import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
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
          {i18n.t('greeting_one')}
        </Text>
        <Text style={styles.instructions}>
          {i18n.t('greeting_two')}
        </Text>
      
        <Button title="Options"
                onPress = {() => {this.userLogin()}} />

      </View>
    );
  }
}

/**
 * Screen Design
 */
const styles = EStyleSheet.create({
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


