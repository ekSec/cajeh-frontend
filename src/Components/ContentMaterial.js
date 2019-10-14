import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import {iOSUIKit} from 'react-native-typography';



export default class ContentMaterial extends Component {
  render () {
    return (
          <View style={[this.props.design,{backgroundColor: this.props.backColor}]}>
          <Text style={[iOSUIKit.largeTitleEmphasized, {color: 'rgb(255, 135, 95)', fontWeight:'900', paddingBottom: 10}]}>{this.props.text1}</Text>
          <Text style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'900', paddingBottom:10}]}>{this.props.text2}</Text>
          <Text style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'900', paddingBottom:10}]}>{this.props.text3}</Text>
          <Text style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'900', paddingBottom:10}]}>{this.props.text4}</Text>
          <Text style={[iOSUIKit.title3Emphasized, {color: 'rgb(255, 255, 255)', fontWeight:'900', paddingBottom:10}]}>{this.props.text5}</Text>
          </View>
    )
  }
}