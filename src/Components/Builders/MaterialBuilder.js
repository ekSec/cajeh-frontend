import React, { Component } from "react";
import { Text, View} from "react-native";
import Swiper from "react-native-swiper";
import ContentBuilder from "./ContentBuilder.js";

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  }
};

export default class MaterialBuilder extends Component {
  render() {
    return (
        <View>
      <Swiper
        style={styles.wrapper}
        height={400}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#000",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: null,
          right: 10
        }}
        loop={true}
      >
        <ContentBuilder
          design={styles.slide}
          id={0}
          backColor="rgba(0,0,20,1)"
          connect = {this.props.connect}
          title={<Text numberOfLines={1}>Page Zero</Text>}
        />
        <ContentBuilder
          design={styles.slide}
          id={1}
          backColor="rgba(0,0,20,0.6)"
          connect = {this.props.connect}
          title={<Text numberOfLines={1}>Page One</Text>}
        />
        <ContentBuilder
          design={styles.slide}
          id={2}
          backColor="rgba(0,0,20,0.8)"
          connect = {this.props.connect}
          title={<Text numberOfLines={1}>Page Two</Text>}
        />
        <ContentBuilder
          design={styles.slide}
          id={3}
          backColor="rgba(0,0,20,0.4)"
          connect = {this.props.connect}
          title={<Text numberOfLines={1}>Page Three</Text>}
        />
      </Swiper>
      </View>
    );
  }
}
