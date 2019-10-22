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
    name:'Barış'
  };
  onPressChangeName = () => {
    //alert('Merhaba');
    this.setState({
      name: 'Dilan',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Card myText='Selam'backgroundColor='green'></Card>
        <Card myText= ':)'/> 
        <Text>{this.state.name}</Text>
        <Button 
          title='İsmi Değiştir'
          color='pink'
          onPress={this.onPressChangeName}></Button>

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

