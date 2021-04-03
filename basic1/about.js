import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
const actions = [
    {
      text: "Accessibility",
    //   icon: require("./images/ic_accessibility_white.png"),
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
    //   icon: require("./images/ic_language_white.png"),
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
    //   icon: require("./images/ic_room_white.png"),
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
    //   icon: require("./images/ic_videocam_white.png"),
      name: "bt_videocam",
      position: 4
    }
  ];
class About extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        // console.log(this.props)
        return(
            // <View>
            //     <Text>hello about hihih huuhuh hehhhehe</Text>
            //     <StatusBar style="auto" />
                <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
      var n=this.props.navigation;
      n.navigate("Profile")
    }}
  />
            // </View>
        )
    }
}
export default About;