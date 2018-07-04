import PropTypes from 'prop-types';
import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


/**
 * Component
 * This is the Top Footer menu
 * available in all app
 */

const Footer = ({ onExpandFavorites }) => (
    <View style={styles.container}>

        <Icon name="heart" size={30} color='white' onPress={onExpandFavorites} />

    </View>
);

Footer.propTypes = {
};

export default Footer;
