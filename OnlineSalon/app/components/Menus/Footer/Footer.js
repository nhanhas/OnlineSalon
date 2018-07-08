import PropTypes from 'prop-types';
import i18n from '../../../i18n';
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

const Footer = ({ onExpandFavorites, onExpandMessages, onExpandServices, totalMessages ,totalServices }) => (
    <View style={styles.container}>
        
        <View style={styles.iconsRow}>
            <Icon name="heart" size={30} color='white' onPress={onExpandFavorites} />
            <Text style={styles.favoriteText}>{i18n.t('APP_COMPONENT_FOOTER_FAVORITES')}</Text>

            <View style={styles.notificationIcons}>

                <View>
                    <Icon name="bell-o" size={30} color='white' onPress={onExpandMessages} />
                    {totalMessages > 0 ?
                        ( <View style={styles.iconAlertYellow}><Text style={styles.textStyle}>{totalMessages}</Text></View> )
                        : ''
                    }
                </View>

                <View>
                    <Icon name="shopping-bag" size={30} color='white' onPress={onExpandServices} />
                    {totalServices > 0 ?
                        ( <View style={styles.iconAlertRed}><Text style={styles.textStyle}>{totalServices}</Text></View> ) 
                        : '' 
                    }
                </View>

            </View>

        </View>

    </View>
);

Footer.propTypes = {
};

export default Footer;
