import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
  Platform,
} from 'react-native';
import Card from './src/components/Card';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props ={};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card></Card>
        <Card></Card>
        <Card />
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

