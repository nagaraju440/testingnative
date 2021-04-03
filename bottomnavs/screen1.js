import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Screen2 from './screen2'
import Screen3 from './screen3'
import Screen4 from './screen4'
const Drawer = createDrawerNavigator();

class Screen1 extends React.Component{
    
    click=()=>{
       var n=this.props.navigation;
        console.log("clicked raaa babay hello",n )
        n.navigate('Profile')

        // n.navigate('screen4')
      }
      clic=()=>{
        n=this.props.navigation;
        console.log("clicked raaa babay",n )
        n.openDrawer()
        // n.navigate('screen1item')
      }
      c=()=>{
        // alert("hlo")
        var l=this.props
        console.log(l,"hiiiiiii")
        l.openDrawer()
      }
       c1=()=>{
        // alert("hlo")
        var l=this.props
        console.log(l,"hiiiiiii")
        
       l.closeDrawer()
      }
        render(){
            return(
               <View  style={styles.cont1}>
                <StatusBar style="auto" />

                    {/* <View style={styles.cont1}> 

                    {/* <Text>hello world</Text> */}
                {/* </View> */} 
                <View style={styles.cont2}>
                       <Text onPress={this.clic}>click m</Text>
                       <Button title="Open drawer" onPress={ this.c} />
                       {/* <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Screen1} />
      <Drawer.Screen name="Notifications" component={Screen2} />
    </Drawer.Navigator> */}
      {/* <Button title="Toggle drawer" onPress={ this.c1} /> */}
                      

                       
                       {/* <Text>           hii</Text> */}
                      
                </View> 
                <View >
                <Button style={styles.cont4}
                onPress={this.click}
                title="search"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
                </View>
              
                <View style={styles.cont3}>
                       <Text>click me eeeee</Text>
                       {/* <Text>           hii</Text> */}
                       
                </View>
                <Button style={styles.cont4}
                onPress={this.clic}
                title="itmes"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
                
               </View>
            )
        }
}
export default Screen1;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'yellow',
     alignItems: 'center',
    //  justifyContent: 'center',
   },
   cont1:{
    //   width:300,
      flex:1,
    //   height:30,
      backgroundColor: 'yellow',
   },
   cont2:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
 },
  cont3:{
    flex:2,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
 },
 cont4:{
     width:"300px",
     height:"20px"
 }
});