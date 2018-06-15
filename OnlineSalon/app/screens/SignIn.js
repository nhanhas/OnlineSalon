import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    TouchableOpacity,
    Text,
    View
  } from 'react-native';

import {CustomButton} from '../components/Buttons/CustomButton';

/**
 * Sign in Form
 */
export default class SignIn extends Component {
    /**
     * Declare All Component 
     * Properties
     */
    static propTypes = {
      navigation: PropTypes.object
    }
  
  
    //# Render #//
    render() {
      return (
        <View style={styles.container}>
          
          <Text>{'SIGN IN'}</Text>

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
    }
});
  