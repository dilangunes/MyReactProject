import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   SafeAreaView,
   FlatList,
   Image,
   TouchableOpacity,TextInput
} from 'react-native';

import data from '../../data';
export default class FlatListExample extends Component {
  state = {
    text: '',
    contacts: data
  };
  renderContactsItem = ({item, index}) => {
    return(
      <TouchableOpacity style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#f3f2ff' : ''}]}>
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
//fonksiyon oluşturma
searchFilter = text => {
  const newData = data.filter(item => {
    const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

    return listItem.indexOf(text.toLowerCase()) > -1;
  });

  this.setState({
    contacts: newData,
  });
};
//fonksiyon oluşturma

  renderHeader = () => {
    const {text} = this.state;
    return(
      <View style= {styles.searchContainer}>
        <TextInput 
          value={text}
          onChangeText={text => {
            this.setState({
              text,
            });
            this.searchFilter(text);
          }
          }
          placeholder= "Search..." 
          style= {styles.searchInput}
          />

      </View>
      )
  };
    render() {
    return (      
        <FlatList
        ListHeaderComponent = {this.renderHeader()}
        renderItem={this.renderContactsItem}
        keyExtractor={(item) => item._id}
       //keyExtractor={(item ,index) => index.toString()}
        data = {this.state.contacts}
        >
        </FlatList>      
         
    );
  }
}

const styles = StyleSheet.create({
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
    searchContainer: {
      padding: 10
    },
    searchInput:{
      fontSize: 20,
      backgroundColor: '#f9d9f9',
      padding: 10
    }
});