import PropTypes from 'prop-types';
import i18n from '../../../i18n';
import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconIOS from 'react-native-vector-icons/Ionicons';



import styles from './styles';


/**
 * Component
 * This is the Top Header menu
 * available in all app
 */

const Header = ({ onExpandMenu }) => (
    <View style={styles.container}>

        <View style={styles.iconsRow}>
            <IconIOS name="ios-menu-outline" size={40} color='white' onPress={onExpandMenu} />

            <View style={styles.iconContent}>
                <Icon name="heart" size={30} color='white'/>
                <Text style={styles.textTitle}>{i18n.t('APP_COMPONENT_HEADER_HEART_1')}</Text>
                <Text style={styles.textDescription}>{i18n.t('APP_COMPONENT_HEADER_HEART_EXPLAIN_1')}</Text>
            </View>

            <View style={styles.iconContent}>
                <Icon name="heart" size={30} color='white'/>
                <Text style={styles.textTitle}>{i18n.t('APP_COMPONENT_HEADER_HEART_2')}</Text>
                <Text style={styles.textDescription}>{i18n.t('APP_COMPONENT_HEADER_HEART_EXPLAIN_2')}</Text>
            </View>

            <View style={styles.iconContent}>
                <Icon name="heart" size={30} color='white'/>
                <Text style={styles.textTitle}>{i18n.t('APP_COMPONENT_HEADER_HEART_3')}</Text>
                <Text style={styles.textDescription}></Text>
            </View>

            <View style={styles.iconContent}>
                <Icon name="heart" size={30} color='white'/>
                <Text style={styles.textTitle}>{i18n.t('APP_COMPONENT_HEADER_HEART_4')}</Text>
                <Text style={styles.textDescription}></Text>
            </View>

            <View style={styles.iconContent}>
                <IconSimple name="equalizer" size={29} color='white' />
                <Text style={styles.textTitle}>{i18n.t('APP_COMPONENT_HEADER_FILTER')}</Text>
                <Text style={styles.textDescription}></Text>
            </View>

            
        </View>

    </View>
);

Header.propTypes = {
};

export default Header;
