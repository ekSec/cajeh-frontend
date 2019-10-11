/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button as NewButton,
    Left,
    Right,
    Body,
    Icon,
    Fab,
    Text as NewText,
  } from 'native-base';
import { Button, Text, View, TouchableOpacity } from "react-native";

export default class Selector extends Component {
  render() {
    return (
      <NewButton
      style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
      onPress={() => this.props.navigation.navigate("Collaborator")}>
      <Icon name={this.props.icon} style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
      <NewText style={{color:'white', fontWeight: '900'}}>{this.props.name}</NewText>
      <Icon name= {this.props.icon} style= {{color: 'rgba(100,00,255,1)', fontSize: 30}} />
    </NewButton>
    );
  }
}
