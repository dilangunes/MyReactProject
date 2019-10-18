import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
  Platform,
} from 'react-native';

type Props ={};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.box1}>
        <Text> Selam</Text>
       </View>
       <View style={styles.box2}>
         <View style={[styles.box,styles.box3]}></View>
         <View style={[styles.box,styles.box4]}></View>
         <View style={[styles.box,styles.box5]}></View>
       </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    backgroundColor: 'pink',
    flex: 4,
   

  },
  box1: {
    backgroundColor: 'aquamarine',
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-end",
    alignItems: 'center'  

 },
 box2: {
  backgroundColor: 'purple',
  flex: 2,
  //flexDirection : 'row',
  justifyContent: 'center',
  alignItems: 'center',
  justifyContent: "space-around",
},
box:{
  width: 60,
  height: 60,
},
box3:{
 backgroundColor: 'red'
},
box4:{
 backgroundColor: 'grey'
},
box5:{
  backgroundColor: 'pink',
}
});

