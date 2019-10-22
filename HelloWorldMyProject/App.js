import React,{Component} from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image
} from 'react-native';

export default class App extends Component {
    render() {
    return (
      <View style={styles.container}>
        <Image style = {{width: '50%', height: 180}} 
        source= {require('./src/assets/platform.png')}></Image>

        <Image
         styles= {{width: '%100', height: 220}}
         source= {{uri: 'https://cdn1.ntv.com.tr/gorsel/yasam/yeni-fenomen-insan-gibi-uyuyan-kedi-chata/,EvAHMRaNnUyOkUb_gT4xjA.jpg?w=960&mode=max&v=20190718111545025'}}>

         </Image>
 
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
});

