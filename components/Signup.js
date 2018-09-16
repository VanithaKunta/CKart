import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';
import Dimensions from 'Dimensions';

import {Actions} from 'react-native-router-flux';
//import firebase from './firebase';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
      mobile: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/mobile/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mobile"
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({mobile})}/>
        </View>

         <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => Actions.Login()}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  inputContainer: {
      borderBottomColor: '#303030',
      backgroundColor: '#303030',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      marginBottom:18,
      flexDirection: 'row',
      alignItems:'center',
      marginLeft:30,
      marginRight:30,

  },
  inputs:{
      height:45,
      marginLeft:30,
      marginRight:30,
      borderBottomColor: '#FFFFFF',
      flex:1,
      color : '#ffffff',
      fontSize:20,
      width: 200,
      shadowColor:'#505050',
  },
  inputIcon:{
    width:20,
    height:20,
    marginLeft:15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
    marginLeft:15,
  },
  signupButton: {
    backgroundColor: 'rgb(213,99,37)',
  },
  signUpText: {
    color: 'white',
    fontSize:20,
  }
});
