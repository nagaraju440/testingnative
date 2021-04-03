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
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
class Stack1 extends React.Component{
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
    //      <Tab.Navigator>
    //   <Tab.Screen name="screen1" component={Screen1} />
    //   <Tab.Screen name="screen2" component={Screen2} />
    //   <Tab.Screen name="screen3" component={Screen3} />
    // </Tab.Navigator>
 <Stack.Navigator>
 <Stack.Screen
     name="Home"
     // component={Home}
     component={Screen1}
     options={{ title: 'Welcome' }}
   />
   <Stack.Screen name="Profile" component={Screen4} options={{ title: 'Welcome not' }} />

 </Stack.Navigator>
    
        // </NavigationContainer>
            )
        }
}
export default Stack1;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
   },
});
