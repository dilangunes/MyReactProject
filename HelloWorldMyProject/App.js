import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Button,
   Text,
   TouchableOpacity
} from 'react-native';

export default class App extends Component {
    render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View>
            <Text style={styles.buttonTitle}>My Button 2</Text>
          </View>
        </TouchableOpacity>
        <Button title='My Button'></Button>
      </View>       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonTitle:{
    fontSize: 55,
    backgroundColor: 'orange',
    borderRadius:15,
    padding: 15,
  },
});

