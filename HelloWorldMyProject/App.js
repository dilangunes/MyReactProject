import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button
} from 'react-native';
import Card from './src/components/Card';

export default class App extends Component {
  
  state = {
    number: 0
  };
  OnPressArtir = () => {
    
    this.setState({
     number : this.state.number + 1,
    });
  };
  OnPressAzalt = () => {
    
    this.setState({
     number : this.state.number - 1,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.numbers}>{this.state.number}</Text>
        <View style={styles.buttons}>        
          <Button title='Artır ++' color='pink' onPress={this.OnPressArtir}></Button>
          <Button title='Azalt --' color='pink' onPress={this.OnPressAzalt}></Button>
        </View>
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
  buttons:{
    flexDirection: 'row',
    borderColor: 'purple',
    borderWidth: 4,
    padding:5
  },
  numbers:{
    fontSize: 35,
  }
});

