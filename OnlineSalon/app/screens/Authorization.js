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
 * Stage #4 of Authentication
 * Confirm GEO Location
 */
export default class Authorization extends Component {
    /**
     * Declare All Component 
     * Properties
     */
    static propTypes = {
      navigation: PropTypes.object
    }
  
    //#A - Allow App GEO Location Function
    allowApp = () =>{
        //this.props.navigation.navigate('Login');
    };

    //#B - Refuse App GEO Location Function
    refuseApp = () =>{
      this.props.navigation.goBack();
    };
  
    //# Render #//
    render() {
      return (
        <View style={styles.container}>
          
          <View style={styles.infoContainer}>
            <Text style={styles.textColor}>
              {i18n.t('APP_AUTHORIZATION_INFO_LABEL')}
            </Text>
          </View>

          <View style={styles.buttons}>
            <CustomButton 
              label={i18n.t('APP_AUTHORIZATION_ALLOW_BTN')}
              onPress = {() => {this.allowApp()}} /> 
            
            <CustomButton 
              label={i18n.t('APP_AUTHORIZATION_REFUSE_BTN')}
              onPress = {() => {this.refuseApp()}} />

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
        backgroundColor: '$lightPink',
    },
    infoContainer: {
      marginTop: 80
    },
    buttons:{
        marginTop: 50,
        width: '70%'
    },
    textColor:{
      color: '$xDarkPink',
      textAlign: 'center'
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
  