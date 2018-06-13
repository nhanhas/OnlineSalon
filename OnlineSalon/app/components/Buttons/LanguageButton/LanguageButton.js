import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

/**
 * Component
 * Button For Select Language
 * Present @Login Screen Stage #2
 */

const LanguageButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

LanguageButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default LanguageButton;
