import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import Screen4 from './screen4'
import Screen1search from './screen1search'
import Screen1item from './screen1item'
import Stack1 from './stack1'
// import { TextInput,View,Text} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
class Screen1home extends React.Component{
        render(){
            return(
                // <View style={styles.container}>
                // <StatusBar style="auto" />

                //     <Text>hello screen2</Text>
                // </View>
                // <NavigationContainer>
        // <Stack.Navigator>
        // <Stack.Screen
        //     name="Home"
        //     component={Screen1}
        //   />
        //   <Stack.Screen name="screen1search" component={Screen1search} />
        //   <Stack.Screen name="screen1item" component={Screen1item}  />
        // </Stack.Navigator>
        //  <View>
     <Tab.Navigator>
       <Tab.Screen name="screen1" component={Stack1} />
       <Tab.Screen name="screen2" component={Screen2} />

       <Tab.Screen name="screen3" component={Screen3} />
 </Tab.Navigator> 
//     {/* <FloatingAction
//     actions={actions}
//     onPressItem={name => {
//       console.log(`selected button: ${name}`);
//     }}
//   /> */}
//          {/* </View> */}

    
        // </NavigationContainer>
            )
        }
}
export default Screen1home;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});
