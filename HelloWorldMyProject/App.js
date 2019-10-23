import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Button,
   Text,
   ScrollView
} from 'react-native';

export default class App extends Component {
    render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 1 </Text>
        </ScrollView>     
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
    alignItems: 'center',
    paddingHorizontal: 10,

  },
 title:{
   borderRadius:15,
   backgroundColor: 'orange',   
   marginVertical: 30,
   textAlign: 'center',
   paddingVertical: 60,
 }
});

