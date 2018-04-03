/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    WebView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
            <WebView
	source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
            />
	    let pic = {
                uri: 'http://103.41.84.32/images/HeaderLPI.jpg'
        };
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit App.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       {instructions}
    //     </Text>
    //     <Text style={styles.version}>
    //       ISB Weather 0.0.1
    //   // Javascript here
    //     </Text>
    //   </View>

    // );
      return (
          
              <WebView 
          style={styles.WebViewStyle} 
          source={{uri: 'http://103.41.84.32/INDEX.HTM'}} 
          javaScriptEnabled={true}
          domStorageEnabled={true}  />
              
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
  version: {
	fontSize: 18,
	textAlign: 'center',
	marginTop: 10,
	marginBottom: 5,
 },
});

import Amplify from 'aws-amplify';

import aws_exports from 'ISB/aws-exports';

Amplify.configure(aws_exports);
