import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './styles';

/**
 * Component
 * Generic Form Input
 * Present in multiple Screens
 */

const CustomInput = ({ label, onChange }) => (
    <View style={styles.container}> 
      <FormInput  onChangeText={onChange}
                  placeholder={label}
                  containerStyle={styles.customContainerStyle}
                  inputStyle={styles.customInputStyle}
                  />
    </View>
);

CustomInput.propTypes = {
};

export default CustomInput;


