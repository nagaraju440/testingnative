import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './basic1/home'
import About from './basic1/about'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! hlooo hiiii andii hlooooo hiii andii hehhehe huhuuhu hahhahhahaha</Text>
    //  <Text>hloo world hiiii mavlga vundadhu</Text>
    // </View>
        //  <NavigationContainer>
    //           <View  style={styles.container}>
    // <Home/>

    //         </View>
        //  {/* </NavigationContainer> */}
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home "
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={About} options={{ title: 'Welcome not' }} />
       
        </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
     container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
