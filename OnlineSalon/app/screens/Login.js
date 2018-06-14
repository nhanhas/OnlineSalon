import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Text,
  Button,
  View,
} from 'react-native';

import {CustomInput} from '../components/TextInputs/CustomInput';


/**
 * Stage #3 of Authentication
 * Username & Password
 *       Or
 * Create Account
 */
export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  /**
   * Declare All Component 
   * Properties
   */
  static propTypes = {
    //empty
  }
  
  //#A - Login function 
  userLogin = () => {
    alert(this.state.username);
    //this.props.navigation.navigate('Options');
  };
  
  //#B - Handler for CustomInput model change
  onChangeCustomInput = (model, newValue) => {
    //#1 - Set new state for username model value
    this.setState({model: text});
  };


  //# Render #//
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.formInputs}>
          <CustomInput  
            onChange={(newValue) => this.setState({username: newValue})}
            label = {i18n.t('LOGIN_EMAIL')} />

          <CustomInput  
            label = {i18n.t('LOGIN_PASSWORD')} />

        </View>


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
    backgroundColor: '$lightPink'
  },
  formInputs: {
    width: '70%'
  },
});


