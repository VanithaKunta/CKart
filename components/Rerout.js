import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

export default class Rerout extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
           <Image style={styles.logo} source={require
             ('./images/image.jpg')} />
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => Actions.Category()}>
            <Text style={styles.button}>
             Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.Buy()}>
            <Text style={styles.button}>
             Sell
            </Text>
          </TouchableOpacity>
        </View>
       </View> 
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',

    marginBottom: 200,
  },
  logo:{
  },
  buttonsContainer:{
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  button:{
    fontFamily: 'gotham rounded',
    backgroundColor: 'rgb(213,99,37)',
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH - 60,
    borderRadius: 30,
    color: 'white',
    marginBottom: 7,
    textAlignVertical: 'center',
  },

});
