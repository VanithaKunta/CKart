import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Category extends Component{
 state={
 	br : '',
 	sem: '',
 	sub: '',
 }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
           <Image style={styles.logo} source={require
             ('./images/image.jpg')} />
          </Text>
        </View>

        <View style={styles.formContainer}>
            <Picker style = {styles.picker}
              selectedValue = {this.state.br}
              onValueChange={(itemValue, itemIndex) => this.setState({br: itemValue})}>
              <Picker.Item label="Branch" value="none" />
              <Picker.Item label="CSE" value="a" />
              <Picker.Item label="IT" value="b" />
              <Picker.Item label="ECE" value="c" />
              <Picker.Item label="BIO" value="d" />
              <Picker.Item label="MCA" value="e" />
              <Picker.Item label="EEE" value="f" />
              <Picker.Item label="PRO" value="g" />
              <Picker.Item label="CVI" value="h" />
              <Picker.Item label="CHE" value="i" />
            </Picker>
       
            <Picker style = {styles.picker}
              selectedValue = {this.state.sem}
              onValueChange={(itemValue, itemIndex) => this.setState({sem: itemValue})}>
              <Picker.Item label="Semester" value="none" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
            </Picker>
       
            <Picker style = {styles.picker}
              selectedValue = {this.state.sub}
              onValueChange={(itemValue, itemIndex) => this.setState({sub: itemValue})}>
              <Picker.Item label="Subject" value="none" />
              <Picker.Item label="Sub 1" value="s1" />
              <Picker.Item label="Sub 2" value="s2"/>
              <Picker.Item label="Sub 3" value="s3"/>
              <Picker.Item label="Sub 4" value="s4"/>
              <Picker.Item label="Sub 5" value="s5"/>
              <Picker.Item label="Sub 6" value="s6"/>
            </Picker>
        </View>

         <View style={styles.formContainer}>
              <TextInput style = {styles.formElement}
               underlineColorAndroid = "transparent"
               placeholder = "Item Description"
               autoCapitalize = "none"
               onChangeText={head=>this.setState({head})}
               value ={this.state.head}/>
         </View>          

        <View style={styles.buttonsContainer}>
        	<TouchableOpacity onPress={()=> Actions.Search({br1 : this.state.br, sem1 : this.state.sem, sub1 : this.state.sub})}  >
            	<Text style={styles.button}>
             		Search
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
    marginBottom : 100,
  },
  logo:{
    zIndex: 11,
  },
  buttonsContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontFamily: 'gotham rounded',
    backgroundColor: 'rgb(213,99,37)',
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH - 100,
    borderRadius: 30,
    color: 'white',
    marginBottom: 10,
    textAlignVertical: 'center',
    zIndex: 11,

  },
  formContainer:{
  	textAlign :'center',
    width: DEVICE_WIDTH - 100,
    borderRadius: 10,
  },
  formElement:{
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    height: 50,
    width: DEVICE_WIDTH - 100,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 20,

  },
  picker:{
    width: DEVICE_WIDTH - 100,
    borderRadius: 80,
    marginBottom: 5,
    backgroundColor: '#101010',
    color : 'white',
  },	
});