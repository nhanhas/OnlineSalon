import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    ScrollView,
    TouchableOpacity,
    Button,
    Text,
    View
  } from 'react-native';

import {CustomInput} from '../components/TextInputs/CustomInput';
import {CustomButton} from '../components/Buttons/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Sign in Form
 */
export default class SignIn extends Component {

  constructor(props) {
    super(props);

    //#1 - Initiale state vars
    this.state = {
      step: 0,

      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      isFirstStepValid: false

    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  /**
   * Declare All Component 
   * Properties
   */
  static propTypes = {
    navigation: PropTypes.object
  }

  //#A - Handler to next Step
  nextStep = () => {
    //#1 - Validate form
    //TODO
    
    //#2 - Update State to next Step
    this.setState({step : this.state.step+1});
  }

  //#B - Handler for stepFirst Input changes
  onChangeInput = (newValue) => {
    this.setState(newValue);
    //#1 - Depending on Step, make some validations
    switch (this.state.step) {
      case 0:
        //#1 - Reset valid flag
        this.setState({isFirstStepValid : false});

        //#2 - TODO do all the validations
        if(this.state.name != ''){
          this.setState({isFirstStepValid : true});
        }
        break;

      case 1:
        break;

      case 2:
        break;
    }

  }

  //# Render #//
  render() {
    return (
      <View style={styles.container}>
        
        {/* Steps */}
        <View style={styles.stepList}>
          <Text style={styles.stepSelected}>{i18n.t('APP_SIGNIN_STEP_0')}</Text>
          <Icon name="chevron-right" size={20} color={this.state.step > 0 ? '#67178c' : 'white'} />
          <Text style={ this.state.step >= 1 ? styles.stepSelected : styles.stepNotVisited}>{i18n.t('APP_SIGNIN_STEP_1')}</Text>
          <Icon name="chevron-right" size={20} color={this.state.step > 1 ? '#67178c' : 'white'} />
          <Text style={ this.state.step >= 2 ? styles.stepSelected : styles.stepNotVisited}>{i18n.t('APP_SIGNIN_STEP_2')}</Text>
        </View>
        
        {/* Identification */}
        {this.state.step === 0 && (
          <ScrollView  width={'70%'} contentContainerStyle={styles.scrollContainer}>
            {/* inputs */}
            <View style={styles.inputsContainer}>
              <CustomInput
                label = {i18n.t('APP_SIGNIN_STEP_0_NAME')} 
                onChange={(name) => {this.onChangeInput({name})}} />
              <CustomInput 
                label = {i18n.t('APP_SIGNIN_STEP_0_EMAIL')} 
                onChange={(email) => {this.onChangeInput({email})}} />
              <CustomInput 
                isPassword={true}
                label = {i18n.t('APP_SIGNIN_STEP_0_PASSWORD')} 
                onChange={(password) => {this.onChangeInput({password})}} />
              <CustomInput 
                isPassword={true}
                label = {i18n.t('APP_SIGNIN_STEP_0_REPEAT_PW')} 
                onChange={(repeatPassword) => {this.onChangeInput({repeatPassword})}} />
              <CustomInput 
                label = {i18n.t('APP_SIGNIN_STEP_0_PHONE')} 
                onChange={(phone) => {this.onChangeInput({phone})}} />

            </View>

            <View style={styles.buttonsContainer}>
              <CustomButton 
                label={i18n.t('APP_SIGNIN_SAVE_BTN')}
                onPress = {this.nextStep} />

              <CustomButton 
                isDisabled={!this.state.isFirstStepValid}
                hasIcon={true}
                label={i18n.t('APP_SIGNIN_ADDRESS_BTN')}
                onPress = {this.nextStep} />
            </View> 

          </ScrollView>
        )}
        
        {/* Address */}
        {this.state.step === 1 && (
          <Text style={styles.welcome}>
            Step 1
          </Text>
        )}

        {/* Payment */}
        {this.state.step === 2 && (
          <Text style={styles.welcome}>
            Step 2
          </Text>
        )}



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
      backgroundColor: '$lightPink',
    },
    stepList:{
      position: 'absolute',
      top: 150,
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    stepSelected:{
      fontWeight: '600',
      fontSize: 14,
      color: '$xDarkPink',
      marginLeft: 10,
      marginRight: 10
    },
    stepNotVisited: {
      fontWeight: '600',
      fontSize: 14,
      color: 'white',
      marginLeft: 10,
      marginRight: 10
    },
    scrollContainer: {
      flex: 1,
      paddingVertical: 200,
    },
    inputsContainer: {
      width: '100%'
    },
    buttonsContainer: {
      marginTop: 20,
      width: '100%'
    }
});
  