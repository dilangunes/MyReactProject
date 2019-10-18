import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
    return (
    <View style={styles.cardContainer}>
        <Text style= {styles.cardText}> Selam</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer: {   
        backgroundColor: 'pink',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black'
         },
      cardText: {
        fontSize: 18,
      },
});
