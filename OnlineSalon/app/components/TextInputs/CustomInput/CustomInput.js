import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements'

import styles from './styles';

/**
 * Component
 * Generic Form Input
 * Present in multiple Screens
 * Note: descriptionColor = 0 - Purple
 * Note: descriptionColor = 1 - Red
 */

const CustomInput = ({ label, description, descriptionColor, onChange, isPassword }) => (
    <View style={styles.container}> 
      <FormInput  onChangeText={onChange}
                  placeholder={label}
                  containerStyle={styles.customContainerStyle}
                  inputStyle={styles.customInputStyle}
                  secureTextEntry={isPassword} />
      
      {/* Input description */}            
      {description && (
          <FormLabel labelStyle={ descriptionColor == 0 ? (styles.descriptionLabelPurple) : (styles.descriptionLabelRed) }>*{description}</FormLabel> 
      )}
    </View>
);

CustomInput.propTypes = {
};

export default CustomInput;


