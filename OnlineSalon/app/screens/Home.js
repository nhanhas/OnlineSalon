import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    View,
    Text
  } from 'react-native';

import {Header} from '../components/Menus/Header';

/**
 * Main Application Screen
 * Home
 */
export default class Home extends Component {
    /**
     * Declare All Component 
     * Properties
     */
    static propTypes = {
      //empty
    }
  
      
    //# Render #//
    render() {
      return (
        <View style={styles.container}>
            <Header text={'Menu'}></Header>

            <Text>Home</Text>
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
  