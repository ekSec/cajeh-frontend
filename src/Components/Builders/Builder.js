/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  View
} from "native-base";
import { TouchableOpacity } from "react-native";
import MaterialBuilder from "./MaterialBuilder.js";

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collaboratorImage: this.props.collaboratorImage,
      collaboratorName: this.props.collaboratorName,
      collaboratorNote: this.props.collaboratorNote,
      publishSaves: this.props.publishSaves,
      publishComments: this.props.publishComments,
      publishTimeAgo: this.props.publishTimeAgo,
      page0: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page1: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page2: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      },
      page3: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: ""
      }
    };
  }
  doingPublish = (page, text, string) => {
    this.setState(prevState => ({
      [page]: {
        // object that we want to update
        ...prevState[page], // keep all other key-value pairs
        [text]: string // update the value of specific key
      }
    }));
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          paddingTop: 5,
          borderTopLeftRadius: 200,
          elevation: 10,
          margin: 0
        }}
      >
        <CardItem
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            height: 50,
            margin: 0,
            borderWidth: 0
          }}
        >
          <Left>
            <Thumbnail
              source={{ uri: this.props.collaboratorImage }}
              style={{ height: 30, width: 30 }}
            />
            <Body>
              <Text
                style={{
                  color: "#121212",
                  fontWeight: "600"
                }}
              >
                {this.props.collaboratorName}
              </Text>
              <Text note>{this.props.collaboratorNote}</Text>
            </Body>
          </Left>
          <Right>
            <TouchableOpacity onPress={() => console.log("hi")}>
              <Text
                style={{
                  color: "rgba(50,150,50,1)",
                  fontWeight: "700",
                  fontSize: 20
                }}
              >
                Build
              </Text>
            </TouchableOpacity>
          </Right>
        </CardItem>
        {/* Mudar a Cor Base da Publicação, variar de 0.5 até 1 */}
        <MaterialBuilder connect={this.doingPublish} />
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.5)", height: 10 }}
        />
        <CardItem
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderBottomRightRadius: 20
          }}
        >
          <Left>
            <Button transparent disabled>
              <Icon
                active
                name="bookmark"
                style={{ color: "rgba(80,0,200,1)" }}
              />
              <Text style={{ color: "rgba(80,0,200,1)", fontWeight: "700" }}>
                ? Saves
              </Text>
            </Button>
          </Left>
          <Body>
            <Button transparent disabled>
              <Icon
                active
                name="chatbubbles"
                style={{ color: "rgba(255,100,0,1)" }}
              />
              <Text style={{ color: "rgba(0,0,0,1)", fontWeight: "600" }}>
                ? Comments
              </Text>
            </Button>
          </Body>
          <Right>
            <Button transparent disabled>
              <Icon
                active
                name="alarm"
                style={{ color: "rgba(255,100,0,1)" }}
              />
              <Text
                style={{
                  color: "rgba(0,0,0,1)",
                  fontWeight: "600"
                }}
              >
                ? h ago
              </Text>
            </Button>
          </Right>
        </CardItem>
      </View>
    );
  }
}
