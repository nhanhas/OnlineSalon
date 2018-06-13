import i18n from '../i18n';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';



export default class Options extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {i18n.t('greeting')}
        </Text>
      </View>
    );
  }
}

/**
 * Screen Design
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
