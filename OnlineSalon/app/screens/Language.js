import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View
  } from 'react-native';

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
          
          <Button title="Português"
                  onPress = {() => {this.selectLanguage('PT')}} />
  
          <Button title="English"
                  onPress = {() => {this.selectLanguage('EN')}} />
  
  
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
  