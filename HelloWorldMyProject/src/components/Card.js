import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export default class Card extends Component {
    render() {
        const {myText, backgroundColor} = this.props;
        
    return (
    <View style={[styles.cardContainer,{backgroundColor}]}>
        <Text style= {styles.cardText}> {myText}</Text>
      </View>
    );
  }
}
Card.propTypes= { 
    myText: PropTypes.string,
    backgroundColor : PropTypes.string,
};
const styles = StyleSheet.create({
    cardContainer: {   
        backgroundColor: 'pink',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',        
         },
      cardText: {
        fontSize: 38,
      },
});
