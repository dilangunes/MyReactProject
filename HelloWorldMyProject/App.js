import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   SafeAreaView,
   FlatList,
   Image,
   TouchableOpacity
} from 'react-native';

import data from './src/data/data';
export default class App extends Component {
  renderContactsItem = ({item, index}) => {
    return(
      <TouchableOpacity style={styles.itemContainer}>
        <Image
        style={styles.avatar}
        source ={{uri: item.picture}}
        >
        </Image>
        <View style= {styles.textContainer}>
          <Text style= {styles.name}>{item.name}</Text>
          <Text> {item.company} </Text>
        </View>
      </TouchableOpacity>
    )
  };
    render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        renderItem={this.renderContactsItem}
        keyExtractor={(item) => item._id}
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
    backgroundColor:'white',
    flex: 1
    },
  itemContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
    },
    avatar:{
      width: 50,
      height: 50,
      borderRadius: 25,
      marginHorizontal: 10,

    },
    textContainer:{      
      justifyContent: 'space-around'
    },
    name:{
      fontSize: 20,
    },
});

