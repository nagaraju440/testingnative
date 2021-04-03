import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './basic1/home'
import Home1 from './basic1/home1'
import store from './basic1/redux'
import {Provider, provider,connect} from 'react-redux'
import About from './basic1/about'
import Screen1 from './bottomnavs/screen1'
import Screen1home from './bottomnavs/screen1home'
import Screen2 from './bottomnavs/screen2'
import Screen3 from './bottomnavs/screen3'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { ApolloClient, InMemoryCache, ApolloProvider,gql, useQuery } from '@apollo/client';
import axios from 'axios'
import Log from './log'
// import auth from '@react-native-firebase/auth';
// var hi1;
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});
  const hi=gql`
  {
    books{
      hi
      title
    }
  }
  `;
 
 
export default function App() {

  // console.log(hi,"hii andiiii")
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
          <Provider store={store}>
 <ApolloProvider client={client}>

          {/* <NavigationContainer> 
             <Stack.Navigator>
        <Stack.Screen
            name="Home"
            // component={Home}
            component={Home1}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={About} options={{ title: 'Welcome not' }} />
       
        </Stack.Navigator>
        </NavigationContainer> */}
           {/* <NavigationContainer>  */}

         {/* <Tab.Navigator>
      <Tab.Screen name="screen1" component={Screen1home} />
      <Tab.Screen name="screen2" component={Screen2} />
      <Tab.Screen name="screen3" component={Screen3} />
    </Tab.Navigator>  */}
    <NavigationContainer>
  <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Screen1home} />
      <Drawer.Screen name="Notifications" component={Screen2} />
    </Drawer.Navigator> 
  </NavigationContainer> 
  {/* <Log/> */}
 </ApolloProvider>

        </Provider>
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
