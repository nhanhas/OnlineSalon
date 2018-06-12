import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';



export default class Options extends Component {
  render() {
    return (
        <Text style={styles.welcome}>
         Options to show
        </Text>
       
    );
  }
}

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
