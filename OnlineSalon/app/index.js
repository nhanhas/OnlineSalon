import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';


/**
 * Define the color varialbes
 * for entire application
 */
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $disabledPink: '#f38dc67a',
    $lightPink: '#fce8f2',
    $normalPink: '#f38dc6',
    $darkPink: '#c482bf',  
    $xDarkPink: '#67178c',  
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
});

export default () => (
   
    <Navigator onNavigationStateChange={null} />

);

