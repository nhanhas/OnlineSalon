import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

import {CustomInput} from '../components/TextInputs/CustomInput';
import {CustomButton} from '../components/Buttons/CustomButton';




/**
 * Stage #3 of Authentication
 * Username & Password
 *       Or
 * Create Account
 */
export default class Login extends Component {
  
  constructor(props) {
    super(props);

    //#1 - Initiale state vars
    this.state = {
      username: '',
      password: '',
      rememberSelected: false
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
  
  //#C - Hanlder for Memorize Option
  setMemorizeFlag = () => {

  };

  //#D - Hanlder for Reset Password
  resetPassword = () => {

  };


  //# Render #//
  render() {
  
    return (
      <View style={styles.container}>
        
        {/* Email Password and [Remember; Reset Pw] */}
        <View style={styles.inputsContainer}>
          <CustomInput  
            onChange={(newValue) => this.setState({username: newValue})}
            label = {i18n.t('APP_LOGIN_EMAIL')} />

          <CustomInput  
            onChange={(newValue) => this.setState({password: newValue})}
            label = {i18n.t('APP_LOGIN_PASSWORD')} 
            isPassword={true}/>

          {/* This will be 2 buttons simple */}
          <View style={styles.inlineButtons}>
            <TouchableOpacity onPress={this.setMemorizeFlag}>
              <Text style={styles.textColor}>{i18n.t('APP_LOGIN_MEMORIZE_BTN')}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.resetPassword}>
              <Text style={styles.textColor}>{i18n.t('APP_LOGIN_RESET_PW_BTN')}</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Login and Sign Btn */}
        <View style={styles.buttonsContainer}>
          <CustomButton 
            label={i18n.t('APP_LOGIN_ENTER_BTN')}
            onPress = {() => {this.userLogin()}} />
          
          <Button 
              color='#67178c'
              title={i18n.t('APP_LOGIN_SIGN_BTN')} 
              onPress={() => {this.userLogin()}} />
        </View>

        {/* disclaimer discription to bottom */}
        <View style={styles.disclaimerContainer}>
          <Text style={styles.textColor}>{i18n.t('APP_LOGIN_DISCLAIMER_DESCRIPTION')}</Text>
          {/* 2 links to therms */}
          <View style={styles.disclaimerInline}>
            <TouchableOpacity onPress={this.setMemorizeFlag}>
              <Text style={styles.textUnderline}>{i18n.t('APP_LOGIN_DISCLAIMER_THERMS')}</Text>
            </TouchableOpacity>

            <Text style={styles.textColor}>{i18n.t('APP_LOGIN_DISCLAIMER_DESCRIPTION_AND')}</Text>

            <TouchableOpacity onPress={this.resetPassword}>
              <Text style={styles.textUnderline}>{i18n.t('APP_LOGIN_DISCLAIMER_PRIVACY')}</Text>
            </TouchableOpacity>
          </View>

        </View>

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
  inputsContainer: {
    marginTop: 150,
    width: '70%'
  },
  inlineButtons: {
    marginTop: 20,
    flexDirection:'row', 
    flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    marginTop: 50,
    width: '70%'
  },
  textColor:{
    color: '$xDarkPink'
  },
  disclaimerContainer:{
    position: 'absolute',
    bottom: 20,
    flexDirection:'column', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimerInline:{
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUnderline:{
    color: '$xDarkPink',
    textDecorationLine: 'underline'
  }


});


