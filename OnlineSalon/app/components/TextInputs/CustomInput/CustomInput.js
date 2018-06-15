import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './styles';

/**
 * Component
 * Generic Form Input
 * Present in multiple Screens
 */

const CustomInput = ({ label, onChange, isPassword }) => (
    <View style={styles.container}> 
      <FormInput  onChangeText={onChange}
                  placeholder={label}
                  containerStyle={styles.customContainerStyle}
                  inputStyle={styles.customInputStyle}
                  secureTextEntry={isPassword} />
    </View>
);

CustomInput.propTypes = {
};

export default CustomInput;


