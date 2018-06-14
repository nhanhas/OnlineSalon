import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    View
  } from 'react-native';

import {LanguageButton} from '../components/Buttons/LanguageButton';

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
    selectLanguage = (language) =>{
        //#1 - Change App Language
        i18n.locale = language;
        //#2 - Go to Step #3 - Login Screen
        this.props.navigation.navigate('Login');
    };
  
    //# Render #//
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <LanguageButton style={styles.buttons} onPress = {() => {this.selectLanguage('pt')}}
                                text="PORTUGUÊS" />
            
                <LanguageButton onPress = {() => {this.selectLanguage('en')}}
                                text="ENGLISH" />
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
    buttons:{
        marginTop: 150,
        width: '70%'
    }
});
  