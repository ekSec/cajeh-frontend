/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Fab,
  Text,
} from 'native-base';
import Publish from '../Components/Publish.js';
import {material} from 'react-native-typography';

export default class Lobby extends Component {
  render() {
    return (
      <Container>
        <Header transparent style={{backgroundColor: 'rgba(0,0,20,1)'}}>
          <Left />
          <Body>
            <Title
              style={
                (material.headline,
                {color: 'rgba(255,255,255,1)', fontFamily: 'Roboto', fontSize: 26})
              }>
              Lobby
            </Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}