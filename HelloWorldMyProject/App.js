import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Button,
   Text,
   ScrollView,
   Dimensions
} from 'react-native';
const { width } = Dimensions.get('window') //ekranın genişliğini tutar
export default class App extends Component {
    render() {
    return (
      <View style={styles.container}>
        <ScrollView
         horizontal= {true} //yatay kaydırma yapar
         pagingEnabled = {true} //kaydırma gecişlerini sayfalama gibi yapar
         >
          <Text style= {styles.title}> 1 </Text>
          <Text style= {styles.title}> 2 </Text>
          <Text style= {styles.title}> 3 </Text>
          <Text style= {styles.title}> 4 </Text>
          <Text style= {styles.title}> 5 </Text>
          <Text style= {styles.title}> 6 </Text>
          <Text style= {styles.title}> 7 </Text>
          <Text style= {styles.title}> 8 </Text>
          <Text style= {styles.title}> 9 </Text>
          <Text style= {styles.title}> 10 </Text>
          <Text style= {styles.title}> 11 </Text>
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
    //alignItems: 'center',
    //paddingHorizontal: 10,

  },
 title:{
   borderRadius:15,
   backgroundColor: 'orange',   
   marginVertical: 30,
   textAlign: 'center',
   paddingVertical: 60,
   width: width,
   fontSize : 40
 }
});

