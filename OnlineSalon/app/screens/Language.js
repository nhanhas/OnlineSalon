import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    View
  } from 'react-native';

import LanguageButton from '../components/Buttons/LanguageButton/LanguageButton';

/**
 * Stage #2 of Authentication
 * Select Language
 */
export default class Language extends Component {
    /**
     * Declare All Component 
     * Properties
     */
    static propTypes = {
      //empty
    }
  
    //#A - Choose Language Function
    selectLanguage = (Language) =>{
        //#1 - Change App Language

        //#2 - Go to Step #3 - Login Screen
        this.props.navigation.navigate('Login');
    };
  
    //# Render #//
    render() {
      return (
        <View style={styles.container}>
          
            <LanguageButton style={this.props.styles} onPress = {() => {this.selectLanguage('PT')}}
                            text="PORTUGUÊS" />
        
            <LanguageButton onPress = {() => {this.selectLanguage('EN')}}
                            text="ENGLISH" />
  


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
    buttons:{
        marginBottom: 10
    }
});
  