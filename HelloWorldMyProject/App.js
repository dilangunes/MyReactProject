import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Button,
   Text,
   TextInput
} from 'react-native';

export default class App extends Component {
  state = {
    name: ''
  };
  _onChangeText = text => {
    this.setState({
      name: text,
    });
  }
    render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput
          placeholder = 'Bir isim girin...'
          //secureTextEntry = {true}
          //editable = {false}
          autoCapitalize = 'characters'
          keyboardAppearance = 'light'
          //keyboardType = 'number-pad'
          value = {this.state.name} 
          onChangeText = {this._onChangeText}
          style= {styles.myInput}></TextInput>
      </View>       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
 myInput:{
   borderRadius:15,
   backgroundColor: 'orange',   
   width: '100%' ,
   height: 40,
   borderColor: 'red',
   borderWidth: 2,
   fontStyle: 'italic',
 }
});

