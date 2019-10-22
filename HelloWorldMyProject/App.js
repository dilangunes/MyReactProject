import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button
} from 'react-native';
import Card from './src/components/Card';

export default class App extends Component {
  onPressDetail = () => {
    alert('Merhaba');
  };
  render() {
    return (
      <View style={styles.container}>
        <Card myText= 'Dilan' backgroundColor='blue'></Card>
        <Card myText='Selam'backgroundColor='green'></Card>
        <Card myText= ':)'/> 
        <Button title='Detail' color='pink' onPress={this.onPressDetail}></Button>
      </View>  
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
 
});

