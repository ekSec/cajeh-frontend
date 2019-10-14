import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { iOSUIKit } from "react-native-typography";
import ContentMaterial from "./ContentMaterial.js";
const { width } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
};

export default class extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        height={400}
        onIndexChanged={swipe_index => {
          setTimeout(() => this.setState({ swipe_index }), 500);
        }}
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
        loadMinimal={false}
      >
        <ContentMaterial
          design={styles.slide}
          backColor="rgba(0,0,20,1)"
          text1="Cajeh Things ! One"
          form1="h1"
          text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          form2="h2"
          text3="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          form3="h2"
          text4="When an unknown printer took a galley of type and scrambled it to make a type specimen book"
          form4="h2"
          text5="The Begin"
          form5="h2"
          title={<Text numberOfLines={1}>Page One</Text>}
        />
        <ContentMaterial
          design={styles.slide}
          backColor="rgba(0,0,20,0.6)"
          text1="Cajeh Things ! Two"
          form1="h1"
          text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          form2="h2"
          text3="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          form3="h2"
          text4="When an unknown printer took a galley of type and scrambled it to make a type specimen book"
          form4="h2"
          text5="The Middle"
          form5="h2"
          title={<Text numberOfLines={1}>Page Two</Text>}
        />
        <ContentMaterial
          design={styles.slide}
          backColor="rgba(0,0,20,0.8)"
          text1="Cajeh Things ! 03"
          form1="h1"
          text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          form2="h2"
          text3="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          form3="h2"
          text4="When an unknown printer took a galley of type and scrambled it to make a type specimen book"
          form4="h2"
          text5="The Fight"
          form5="h2"
          title={<Text numberOfLines={1}>Page Three</Text>}
        />
        <ContentMaterial
          design={styles.slide}
          backColor="rgba(0,0,20,0.4)"
          text1="Cajeh Things ! Four"
          form1="h1"
          text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          form2="h2"
          text3="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          form3="h2"
          text4="When an unknown printer took a galley of type and scrambled it to make a type specimen book"
          form4="h2"
          text5="The End"
          form5="h2"
          title={<Text numberOfLines={1}>Page Four</Text>}
        />
      </Swiper>
    );
  }
}
