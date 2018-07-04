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
 * This is the Top Header menu
 * available in all app
 */

const Header = ({ onExpandMenu }) => (
    <View style={styles.container}>

        <Icon name="bars" size={40} color='white' onPress={onExpandMenu} />

    </View>
);

Header.propTypes = {
};

export default Header;
