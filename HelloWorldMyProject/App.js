import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
  Platform,
} from 'react-native';
import Card from './src/components/Card';


type Props ={};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card myText= 'Dilan' backgroundColor='blue'></Card>
        <Card myText='Selam'backgroundColor='green'></Card>
        <Card myText= ':)'/>
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

