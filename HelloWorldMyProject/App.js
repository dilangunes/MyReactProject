import React,{Component} from 'react';
import {
   StyleSheet,
   SafeAreaView,Text
 } from 'react-native';

import FlatListExample from './src/components/FlatListExample';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <FlatListExample></FlatListExample>
      </SafeAreaView>       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex: 1
    },
});

