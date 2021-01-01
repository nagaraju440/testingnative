import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// // import About from './about'
import About from './about'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from 'react-native-navigation';
const Stack = createStackNavigator();

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
        }
    }
    click=()=>{
        console.log(this.props.navigation)
        // navigation=this.props.;
        var n=this.props.navigation
        n.navigate('Profile', { name: 'Jane' })
        if(this.state.x==0){
            this.setState({x:1}) 
        }
        if(this.state.x==1){
            this.setState({x:0}) 

        }
            console.log("clickedd")       
    }
    render(){
        return(
            <View>
                <Text>hello home</Text>
                <StatusBar style="auto" />
                <Button
                onPress={this.click}
                title="hoo hi uhuhu"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />   
       <Text>{this.state.x===0?"hehehuhuuhuh":<About/>}</Text>

            </View>
       
        )
    }
}
export default Home;