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
  Footer,
  FooterTab,
} from 'native-base';
import { Button, Text, View, TouchableOpacity } from "react-native";
import Share from 'react-native-share';
import Modal from "react-native-modal";
import Publish from '../Components/Publish.js';
import {material} from 'react-native-typography';

export default class Lobby extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Container>
        <Header transparent style={{backgroundColor: 'rgba(0,0,20,1)'}}>
          <Left>
          <NewButton
          containerStyle={{}}
          style={{backgroundColor: 'rgba(0,0,0, 1)', height:40}}
          onPress={this.toggleModal} >
          <Icon name="hammer" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
          </Left>
          <Body>
            <Title
              style={
                (material.headline,
                {color: 'rgba(255,255,255,1)', fontWeight: '900', fontSize: 26})
              }>
              Lobby
            </Title>
          </Body>
          <Right>
        <NewButton
          containerStyle={{}}
          style={{backgroundColor: 'rgba(0,0,0, 1)', height:40}}
          onPress={() => this.props.navigation.navigate("MySaves")}>
          <Icon name="bookmark" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
          </Right>
        </Header>
        <Content
          style={{
            backgroundColor: 'rgba(0,0,20,0.8)',
            borderWidth: 0,
            flex: 1,
          }}>

        <Modal isVisible={this.state.isModalVisible} style = {{margin: 0}} useNativeDriver = {true}
        onBackdropPress={() => this.setState({ isModalVisible: false })}
        animationIn = 'zoomInLeft'
        animationOut = 'zoomOutLeft'>
        <View style={{ flex:1, flexDirection:'column'}}>
        <TouchableOpacity style = {{flex: 1}} onPress={this.toggleModal}>
          <View>
          </View>
          </TouchableOpacity>
          <View >
          <View style={{bottom: 10}}>
          <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={() => {this.props.navigation.navigate("MyPublish"),
          this.toggleModal()
          }}>
          <Icon name="eye" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Ver Minhas Publicações</NewText>
          <Icon name="eye" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
          <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={() => {this.props.navigation.navigate("MyMaterial"), this.toggleModal()}}>
          <Icon name="eye" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Ver Meus Materiais</NewText>
          <Icon name="eye" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
        <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={() => {this.props.navigation.navigate("DoPublish"), this.toggleModal()}}>
          <Icon name="cloud-upload" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Fazer Publicação</NewText>
          <Icon name="cloud-upload" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
        <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={() => {this.props.navigation.navigate("EditMaterial"), this.toggleModal()}}>
          <Icon name="hammer" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Editar Material</NewText>
          <Icon name="hammer" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
        <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:50, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={() => {this.props.navigation.navigate("BuildMaterial"), this.toggleModal()}}>
          <Icon name="hammer" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Criar Material</NewText>
          <Icon name="hammer" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
        </View>
        <View style={{height:10, backgroundColor:'rgba(0,0,0,0)'}}>
        </View>
        <NewButton
          style={{backgroundColor: 'rgba(0,0,20, 1)', height:60, borderBottomWidth:3, borderBottomColor:'rgba(255,255,255,0.6)'}}
          onPress={this.toggleModal}>
          <Icon name="close-circle" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
          <NewText style={{color:'white', fontWeight: '900'}}>Exit</NewText>
          <Icon name="close-circle" style={{color: 'rgba(100,00,255,1)', fontSize: 30}} />
        </NewButton>
          </View>
        </View>
        </Modal>
          {/* Mudar a Cor do Lobby da Rede, variar e vender para o usuário escolher */}
          <Publish />
          <Publish />
        </Content>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: 'rgba(0,0,20,1)', height:70, width: 150, right: 90}}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("Material")}>
          <Text style={{fontFamily:'Permanent Marker', color: 'rgba(255,220,0,1)'}}>Refresh</Text>
        </Fab>
      </Container>
    );
  }
}