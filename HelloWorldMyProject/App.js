import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   SafeAreaView,
   FlatList
} from 'react-native';

import data from './src/data/data';
export default class App extends Component {
  renderContactsItem = ({item, index}) => {
    return(
      <View>
        <Text> {item.color} </Text>
        <Text> {item.value} </Text>
      </View>
    )
  };
    render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        renderItem={this.renderContactsItem}
        keyExtractor={(item) => item.value}
       //keyExtractor={(item ,index) => index.toString()}
        data = {data}
        >
        </FlatList>      
      </SafeAreaView>       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex: 1
    },
 title:{
   borderRadius:15,
   backgroundColor: 'orange',   
   marginVertical: 30,
   textAlign: 'center',
   paddingVertical: 60,  
   fontSize : 40
 }
});

