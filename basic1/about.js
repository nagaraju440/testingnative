import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class About extends React.Component{
    render(){
        console.log(this.props)
        return(
            <View>
                <Text>hello about hihih huuhuh</Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}
export default About;
