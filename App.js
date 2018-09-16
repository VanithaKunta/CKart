/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './components/Main';

import { Router, Scene } from 'react-native-router-flux'
import Signup from './components/Signup';
import Login from './components/Login';
import Buy from './components/Buy';
import Category from './components/Category';
import Rerout from './components/Rerout';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <Router>
      <Scene key="root">
      <Scene key="Main"
        component={Main}
        title="Main"
        hideNavBar={true}
        initial
      />
      <Scene key="Login"
        component={Login}
        title="Login"
        hideNavBar={true}
      />
      
      <Scene key="Signup"
        component={Signup}
        title="Signup"
        hideNavBar={true}
      />
      <Scene key="Category"
        component={Category}
        title="Category"
        hideNavBar={true}
      />
      <Scene key="Rerout"
        component={Rerout}
        title="Rerout"
        hideNavBar={true}
      />
      
      <Scene key="Buy"
        component={Buy}
        title="Buy"
        hideNavBar={true}
      />  

      </Scene>
      </Router>
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
