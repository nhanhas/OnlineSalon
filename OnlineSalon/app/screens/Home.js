import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    View,
    Text
  } from 'react-native';

import {Header} from '../components/Menus/Header';
import {Footer} from '../components/Menus/Footer';


/**
 * Return a rendered "Message" Panel
 */ 
function MenuPanel(props) {
    if (!props.isVisible) {
      return null;
    }
  
    return (
      <View style={menuPanelstyles.panelContainer}>
        <Text>Menu</Text>
      </View>
    );
}

/**
 * Return a rendered "Favorites" Panel
 */ 
function FavoritePanel(props) {
    if (!props.isVisible) {
      return null;
    }
  
    return (
      <View style={favoritePanelstyles.panelContainer}>
        <Text>Favorites</Text>
      </View>
    );
}


/**
 * Main Application Screen
 * Home
 */
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenuPanel: false,
            showFavoritesPanel: false,
            totalMessages: 4 ,
            totalServices: 5
        };

        this.handleOnExpandMenu = this.handleOnExpandMenu.bind(this);
        this.handleOnExpandFavorites = this.handleOnExpandFavorites.bind(this);
    }

    /**
     * Declare All Component 
     * Properties
     */
    static propTypes = {
      //empty
    }

    //#A - Handle on Menu click to expand Menu
    handleOnExpandMenu() {
        this.setState(prevState => ({
          showMenuPanel: !prevState.showMenuPanel
        }));
    }
    
    //#B - Handle on Menu click to expand Favorites
    handleOnExpandFavorites() {
        this.setState(prevState => ({
          showFavoritesPanel: !prevState.showFavoritesPanel
        }));
    }
    
    //# Render #//
    render() {
        return (
            <View style={styles.container}>
                {/* Head Menu */}
                <Header onExpandMenu={this.handleOnExpandMenu}></Header>

                <Text>MAP</Text>

                {/* Messages Panel */}
                <MenuPanel isVisible={this.state.showMenuPanel} />

                {/* Messages Panel */}
                <FavoritePanel isVisible={this.state.showFavoritesPanel} />

                {/* Foot Menu */}
                <Footer onExpandFavorites={this.handleOnExpandFavorites} 
                        totalMessages={this.state.totalMessages} 
                        totalServices={this.state.totalServices}></Footer>

            </View>

        );
    }   
}   

/**
 * Screen Design
 */
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$lightPink',
    }
});


/**
 * Messages Panel Design
 */
const menuPanelstyles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$lightPink',
    },
    panelContainer:{
        backgroundColor: 'white',
        position: 'absolute',
        top: 90,
        left: 0,
        right: 0,
        bottom: 60
    }
});

/**
 * Favorites Panel Design
 */
const favoritePanelstyles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$lightPink',
    },
    panelContainer:{
        backgroundColor: 'white',
        position: 'absolute',
        top: 70,
        left: 0,
        right: 0,
        bottom: 60
    }
});