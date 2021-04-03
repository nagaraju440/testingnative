import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { createStackNavigator } from '@react-navigation/stack';
import Stack1 from './stack1'
import Screen4 from './screen4'
import About from '../basic1/about'
const Stack = createStackNavigator();
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
class Screen3 extends React.Component{
        render(){
            return(
                //  <View style={styles.container}>
                //  {/* <StatusBar style="auto" />
                //     <Text>hello screen3</Text>  */}
                  <Stack.Navigator>
    <Stack.Screen
      name="Home"
//      // component={Home}
     component={About}
     options={{ title: 'Welcome' }}
   />
   <Stack.Screen name="Profile" component={Screen4} options={{ title: 'Welcome not' }} />

 </Stack.Navigator> 
//                     {/* <FloatingAction
//     actions={actions}
//    onPressItem={name => {
//     console.log(`selected button: ${name}`);

//     }}
//   />  */}
   
                //  {/* </View> */}
            )
        }
}
export default Screen3;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});