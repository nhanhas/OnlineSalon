import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

//TODO - Fix icon npm lib issue
//import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

/**
 * Component
 * Generic App Button
 * Present in multiple Screens
 */

const CustomButton = ({ label, onPress }) => (
    <View style={styles.container}> 
      <Button
        containerViewStyle={styles.customContainerStyle}
        buttonStyle={styles.customButtonStyle}
        onPress={onPress}
        title={label}/>
    </View>
);

CustomButton.propTypes = {
};

export default CustomButton;


