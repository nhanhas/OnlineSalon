import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    TouchableOpacity,
    Button,
    Text,
    View
  } from 'react-native';

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
      step: 0
    };
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
          <Text style={styles.welcome}>
            Step 0
          </Text>
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




        {/* To Delete - For test only */}
        <Button 
              color='#67178c'
              title={'Proximo'} 
              onPress={this.nextStep} />

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
});
  