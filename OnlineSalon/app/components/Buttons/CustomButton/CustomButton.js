import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

/**
 * Component
 * Generic App Button
 * Present in multiple Screens
 */

const CustomButton = ({ label, hasIcon, onPress }) => (
    <View style={styles.container}> 
      <Button
        containerViewStyle={styles.customContainerStyle}
        buttonStyle={styles.customButtonStyle}
        onPress={onPress}
        title={label}/>

        <View style={styles.customIcon}>
            {hasIcon == true ? CustomButton.customIcon : ''}
        </View>
       
    </View>
);

CustomButton.propTypes = {
};

CustomButton.customIcon = (    
    <Icon name="chevron-right" size={25} color="white" />
);

export default CustomButton;


